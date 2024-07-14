import {  hashSync } from "bcrypt"
import { UserModel } from "../models/user.model.js"
import { appError } from "../utilities/appError.js"

const checkEmail=async (req , res , next)=>{

    const {email}=req.body
    const user = await UserModel.findOne({email})
    if(user) return res.status(409).json({message : 'Email already exists'})
    if(user) return appError('Email already exists' , 409)


    req.body.password = hashSync(req.body.password , 10)
    next()
}
export default checkEmail