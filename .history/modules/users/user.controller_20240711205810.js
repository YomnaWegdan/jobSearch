import { UserModel } from "../../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { appError } from "../../utilities/appError.js"
import { catchError } from "../../middlewares/catchError.js"
const signup=catchError( async(req,res)=>{
    const user = await UserModel.insertMany(req.body) 
    user[0].password = undefined 
    res.status(201).json({message :'success' , user})
})

const signin= catchError( async (req,res)=>{
    const user = await UserModel.findOne({email:req.body.email})

    if(!user || ! bcrypt.compareSync(req.body.password , user.password)) return new appError('Wrong email or password' , 404)
    
    jwt.sign({ _id: user._id, role: user.role }, "secretkeymysecretkey",
        (err , token)=>{
            res.status(201).json({message:'success' , token})       
    })
})

export{
    signup,
    signin
}