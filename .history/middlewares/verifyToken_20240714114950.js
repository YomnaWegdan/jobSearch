import jwt from 'jsonwebtoken'
import { appError } from '../utilities/appError.js';

export const verifyToken=async (req , res , next)=>{
    let {token} = req.headers
    if (!token) {
        return next(new appError('Unauthorized: No token provided', 401));
    }
    jwt.verify(token , process.env.JWT_S ,async (err , decoded)=>{
        if(err) return res.status(401).json({message:'invalid token'})
        req.user= decoded; 
       next()
    })
}