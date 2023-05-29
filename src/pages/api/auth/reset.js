import nc from 'next-connect';
import bcrypt from 'bcrypt';
import { createResetToken } from '@/utils/token';
import db from '@/utils/db';
import User from '@/models/User';

const handler = nc();

handler.put(async (req, res) => {
    try {
        await db.connectDb();
        const { user_id, password } = req.body;
        const user = await User.findById(user_id);
        if(!user) {
            return res.status(400).json({message: "This user does not exist."});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        await User.updateOne({
            _id: user_id,
            password: hashedPassword
        });
        
        res.status(200).json({email: user.email});
        await db.disconnectDb();
        } catch (error) {
        res.status(500).json({message: error.message});
    }

});
export default handler;