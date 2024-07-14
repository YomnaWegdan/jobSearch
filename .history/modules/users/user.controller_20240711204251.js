import { UserModel } from "../../models/user.model.js"
import bcrypt from 'bcrypt'

const signup=async(req,res)=>{
    const user = await UserModel.insertMany(req.body) 
    user[0].password = undefined 
    res.status(201).json({message :'success' , user})
}

const signin= async(req,res)=>{
    const user = await UserModel.findOne({email:req.body.email})

    if(!user || ! bcrypt.compareSync(req.body.password , user.password)) return res.status(404).json({message : 'Wrong email or password'})
    
    J
}

export{
    signup,
    signin
}