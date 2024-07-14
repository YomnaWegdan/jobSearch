import nodemailer from "nodemailer";
import crypto from "crypto";
import { UserModel } from "../models/user.model.js";
import { appError } from "./appError.js";
import { catchError } from "../middlewares/catchError.js";

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


