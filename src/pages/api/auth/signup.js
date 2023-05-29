import nc from 'next-connect';
import bcrypt from 'bcrypt';

import { createActivationToken } from '@/utils/token';
import {sendEmail} from '@/utils/sendEmails';

import db from '@/utils/db';

import { validateEmail } from '@/utils/validation';
import User from '@/models/User';
import { activateEmailTemplate } from '@/emails/acivateEmailTemplate';

const handler = nc();

// TODO: Inserir comentarios explicando o codigo.

handler.post(async (req, res) => {
    try {
        await db.connectDb();
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: "Please fill all the fields"});
        }
        if(!validateEmail(email)) {
            return res.status(400).json({message: "Please enter a valid email"});
        }
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message: "User already exists"});
        }
        if(password.length < 8) {
            return res.status(400).json({message: "Password must be at least 8 characters long"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        const addedUser = await newUser.save();
        const activation_token = createActivationToken({
            id: addedUser._id.toString(),
        });
        const url = `${process.env.BASE_URL}/auth/activate/${activation_token}`;
        sendEmail(email, url, "Verify your account", name, activateEmailTemplate);
        res.status(200).send({message: "Register success! Please activate your email to start."});
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});
export default handler;