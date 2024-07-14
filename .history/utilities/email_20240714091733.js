import nodemailer from "nodemailer";
import crypto from "crypto";
import { UserModel } from "../models/user.model";
import { appError } from "./appError";

// Generate OTP
const generateOTP = () => {
    return crypto.randomBytes(3).toString('hex'); // Generates a 6-digit OTP
};

// Send Email
const sendEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    await transporter.sendMail(mailOptions);
};

const requestOTP = catchError(async (req, res, next) => {
    const { email } = req.body;

    const user = await UserModel.findOne({ recoveryEmail: email });
    if (!user) return next(new appError('User not found', 404));

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

    await user.save();
    await send(email, otp);

    res.status(200).json({ message: 'OTP sent successfully' });
});

export { requestOTP };
