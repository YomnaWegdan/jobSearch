import jwt from 'jsonwebtoken'
import { appError } from '../utilities/appError.js';

// export const verifyToken=async (req , res , next)=>{
//     let {token} = req.headers
//     if (!token) {
//         return next(new appError('Unauthorized: No token provided', 401));
//     }
//     jwt.verify(token , process.env.JWT_SECRET ,async (err , decoded)=>{
//         if(err) return res.status(401).json({message:'invalid token'})
//         req.user= decoded; 
//        next()
//     })
// }


export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    console.log('Received token:', token); // Log token to debug

    if (!token) {
        return next(new appError('Unauthorized: No token provided', 401));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(new appError('Invalid token', 401)); // Use appError for consistency
        }
        req.user = decoded;
        next();
    });
};
