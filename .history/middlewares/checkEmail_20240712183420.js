import {  hashSync } from "bcrypt"
import { UserModel } from "../models/user.model.js"
import { appError } from "../utilities/appError.js"

const checkEmail=async (req , res , next)=>{

    const {email}=req.body
    const user = await UserModel.findOne({email})
    if(user) return new appError('Email already exists' , 409)


    req.body.password = ha(req.body.password , 10)
    next()
}
export default checkEmail