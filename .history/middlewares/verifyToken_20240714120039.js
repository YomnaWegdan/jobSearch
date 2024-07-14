import jwt from 'jsonwebtoken'
import { appError } from '../utilities/appError.js';

export const verifyToken=async (req , res , next)=>{
    let {token} = req.headers
    if (!token) {
        return next(new appError('Unauthorized: No token provided', 401));
    }
    dote.config();
    jwt.verify(token , process.env.JWT_SECRET ,async (err , decoded)=>{
        console.log('JWT_SECRET:', process.env.JWT_SECRET);

        if(err) return res.status(401).json({message:'invalid token'})
        req.user= decoded; 
       next()
    })
}


// export const verifyToken=async (req , res , next)=>{
//     let {token} = req.headers
//     if (!token) {
//         return next(new appError('Unauthorized: No token provided', 401));
//     }
//     jwt.verify(token , "secretkeymysecretkey" ,async (err , decoded)=>{
//         if(err) return res.status(401).json({message:'invalid token'})
//         req.user= decoded; 
//        next()
//     })
// }
