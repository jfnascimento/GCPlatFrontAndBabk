import nc from 'next-connect';
import bcrypt from 'bcrypt';

import { createResetToken } from '@/utils/token';
import {sendEmail} from '@/utils/sendEmails';

import db from '@/utils/db';

import { validateEmail } from '@/utils/validation';
import User from '@/models/User';
import { resetEmailTemplate } from '@/emails/resetEmailTemplate';

const handler = nc();

// TODO: Inserir comentarios explicando o codigo.

handler.post(async (req, res) => {
    try {
        await db.connectDb();
        const {email} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "This email does not exist."});
        }
        const user_id = createResetToken({
            sub: user._id.toString(),
        });
        // Validate send email 
        const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;
        sendEmail(email, url, "Reset your password", user.name, resetEmailTemplate);
        
        await db.disconnectDb();
        res.status(200).json({message: "An email has sent to you, use it to reset your password."});
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});
export default handler;