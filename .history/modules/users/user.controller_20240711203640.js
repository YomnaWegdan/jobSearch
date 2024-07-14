import { UserModel } from "../../models/user.model.js"

const signup=async(req,res)=>{
    const user = await UserModel.insertMany(req.body) 
    user[0].password = undefined 
    res.status(201).json({message :'success' , user})
}

const signin= async(req,res)=>{
    const user = await UserModel.findOne({em})
}

export{
    signup,
    signin
}