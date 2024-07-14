import { UserModel } from "../../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const signup=async(req,res)=>{
    const user = await UserModel.insertMany(req.body) 
    user[0].password = undefined 
    res.status(201).json({message :'success' , user})
}

const signin= async(req,res)=>{
    const user = await UserModel.findOne({email:req.body.email})

    if(!user || ! bcrypt.compareSync(req.body.password , user.password)) return res.status(404).json({message : 'Wrong email or password'})
    
        jwt.sign({ _id: user._id, role: user.role }, "secretkeymysecretkey",
            (err , token)=>{
                res.status(201).json({message:'success' , token})       
        })
}

export{
    signup,
    signin
}