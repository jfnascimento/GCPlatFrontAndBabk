import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Link from 'next/link';
import { 
    LoginContainer, 
    LoginHeader, 
    LoginMain, 
    LoginSvg,
    LoginSpan,

    LoginForm,
    LoginTitle,

    ForgotPassword,
    LoginSocials,
    LoginSocialOr,
    LoginSocialBtns,
    LoginSocialBtn,
    LoginSocialWrap,
    LoginSocialImg,
    TopCol,
} from './styles';
import LoginInput from '@/components/imputs/loginInput';

import CicleIconBtn from '@/components/imputs/buttons/cicledIconBtn';

import { BiLeftArrowAlt } from 'react-icons/bi';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { getProviders, signIn } from 'next-auth/react';
import { get } from 'mongoose';

const initialValues = {
    login_email: "",
    login_password: "",
    full_name: "",
    email: "",
    password: "",
    conf_password: "",
};


const metadata = {
    title: "Online Shopping for Popular Electronics, Fashion, Home & Garden, Toys & Sports, Automobiles and More products for Affordable Prices.",
};

export default function index({ session, providers }) {

    const [country, setCountry] = useState({
        nome: "Brasil",
        bandeira: "https://cdn.ipregistry.co/flags/wikimedia/br.svg",
    });
    
    const [ user, setUser ] = useState(initialValues);
    const { 
        login_email, 
        login_password,
        full_name,
        email,
        password,
        conf_password,
    } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const loginValidation = Yup.object().shape({
        login_email: Yup.string()
            .required("Email address is required.")
            .email("Please enter a valid email address."),
        login_password: Yup.string().min(8, "Password must be at least 8 characters long.").required("Password is required."),
    });

    const registerValidation = Yup.object().shape({
        full_name: Yup.string("What's your name")
                        .required("Full name is required.")
                        .min(3, "Full name must be at least 3 characters long.")
                        .max(50, "Full name must be at most 50 characters long.")
                        .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, "Full name must contain only letters."),
        email: Yup.string()
                    .required("Email address is required.")
                    .email("Please enter a valid email address."),
        password: Yup.string().min(8, "Password must be at least 8 characters long.").required("Password is required."),
        conf_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm password is required."),
    });

    return (
        <>
        <Header country={country} />
        <LoginMain>
            <LoginContainer>
                <LoginHeader>
                    <LoginSvg>
                        <BiLeftArrowAlt />
                    </LoginSvg>
                    <LoginSpan>We'd br happy to join us!
                        <Link href="/">Go Store</Link>
                    </LoginSpan>
                </LoginHeader>
                <LoginForm>
                    <LoginTitle>Sign In</LoginTitle>
                    <p>
                        Get access to one of the best online store.
                    </p>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            login_email,
                            login_password,
                        }}
                        validationSchema={loginValidation}
                    
                    >
                    {
                        (form) => (
                            <Form>                            
                                <LoginInput 
                                    type="email"
                                    name="login_email"
                                    icon="email"
                                    placeholder="Email or Username"
                                    onChange={handleChange}
                                />
                                <LoginInput 
                                    type="password"
                                    name="login_password"
                                    icon="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <CicleIconBtn 
                                    type="submit"
                                    text="Sign In"
                                    />
                                <ForgotPassword>
                                    <Link href="/forgot">Forgot Password?</Link>
                                </ForgotPassword>
                            </Form>
                        )
                    }  
                    </Formik>
                    
                    <LoginSocials>
                        <LoginSocialOr>Or continue with</LoginSocialOr>
                        <LoginSocialWrap>
                        {
                            Object.values(providers).map((provider) => (
                                <LoginSocialBtns key={provider.name}>
                                    <LoginSocialBtn
                                        onClick={() => signIn(provider.id)}
                                        style={{ backgroundColor: provider.color }}
                                    >
                                        <LoginSocialImg src={`../../icons/${provider.name}.png`} alt={provider.name} />
                                        Sign with {provider.name}
                                    </LoginSocialBtn>
                                </LoginSocialBtns>
                            ))
                        }
                        </LoginSocialWrap>
                    </LoginSocials>
                    
                </LoginForm>
            </LoginContainer>


            <LoginContainer>
                <LoginForm>
                    <TopCol></TopCol>
                    <LoginTitle>Sign up</LoginTitle>
                    <p>
                        Get access to one of the best online store.
                    </p>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            full_name,
                            email,
                            password,
                            conf_password,
                        }}
                        validationSchema={registerValidation}
                    
                    >
                    {
                        (form) => (
                            <Form>
                                <LoginInput 
                                    type="text"
                                    name="full_name"
                                    icon="user"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                />                            
                                <LoginInput 
                                    type="email"
                                    name="email"
                                    icon="email"
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                />
                                <LoginInput 
                                    type="Password"
                                    name="password"
                                    icon="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <LoginInput 
                                    type="Password"
                                    name="conf_password"
                                    icon="password"
                                    placeholder="Re-type Password"
                                    onChange={handleChange}
                                />
                                <CicleIconBtn 
                                    type="submit"
                                    text="Sign up"
                                    />
                                
                            </Form>
                        )
                    }  
                    </Formik>
                </LoginForm>
            </LoginContainer>
        </LoginMain>
        <Footer country={country} />
        </>
    );
}

export async function getServerSideProps(context) {
    const providers = Object.values( await getProviders());
;
    return {
        props: { providers },
    };
}
