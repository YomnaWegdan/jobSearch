import { hash } from "bcrypt"
import { UserModel } from "../models/user.model.js"

const checkEmail=async (req , res , next)=>{

    const {email}=req.body
    const user = await UserModel.findOne({email})
    if(user) return res.status(409).json({message : 'Email already exists'})

    req.body.password = ha(req.body.password , 10)
    next()
}