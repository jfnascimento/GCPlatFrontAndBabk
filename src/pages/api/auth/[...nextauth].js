// AUTHENTICATION PROVIDERS
import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from 'next-auth/providers/twitter';
import Auth0Provider from 'next-auth/providers/auth0';
import EmailProvider from 'next-auth/providers/email';
// credentials provider https://next-auth.js.org/configuration/providers#credentials-provider
import CredentialsProvider from 'next-auth/providers/credentials';

// BANCO DE DADOS
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from './lib/mongodb';
import User from '@/models/User';
import db from '@/utils/db';
db.connectDb();

import bcrypt from 'bcrypt';
import token from '@/utils/token';

// TODO: Inserir comentarios explicando o codigo.

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await User.findOne({ email }); 
              // (i.e., the request IP address)
            if(user){
                return SignInUser(user, password);
            }else{
                throw new Error('This email could not be found.')
            }
        
              // If no error and we have user data, return it
            if (res.ok && user) {
                return user
            }
              // Return null if user data could not be retrieved
            return null
            }
        }),
        
        // OAuth authentication providers...
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0", // opt-in to Twitter OAuth 2.0
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER_BASE_URL
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        
    ],
    callbacks: {
        async session({ session, token }) {
            let user = await User.findById(token.sub);
            
            session.user._id = token.sub|| user._id.toString();
            session.user.role = user.role || "user";
            return session;
        }
    },
    pages: {
        signIn: '/signin',
        //signOut: '/signout',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET,
})

const SignInUser = async (user, password) => {
    if(!user){
        return Promise.reject(new Error('No user found.'));
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return Promise.reject(new Error('Email or password wrong.'));
    }

    if(isPasswordValid){
        return user;
    }else{
        return Promise.reject(new Error('The email and password do not match.'));
    }
}