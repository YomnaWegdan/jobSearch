import { UserModel } from "../../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { appError } from "../../utilities/appError.js"
import { catchError } from "../../middlewares/catchError.js"
import Joi from "joi"


const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    recoveryEmail: Joi.string().email(),
    DOB: Joi.date().required(),
    mobileNumber: Joi.number().required(),
    role: Joi.string().valid('User', 'Company_HR').required()
  });


const signup=catchError( async(req,res)=>{
    const user = await UserModel.insertMany(req.body) 
    user[0].password = undefined 
    res.status(201).json({message :'success' , user})
})

const signin= catchError( async (req,res , next)=>{
    const user = await UserModel.findOne({email:req.body.email})

    if(!user || ! bcrypt.compareSync(req.body.password , user.password))  return next(new appError('wrong Email or password' , 404))   
    
    user.status = 'online'
    
    jwt.sign({ _id: user._id, role: user.role }, "secretkeymysecretkey",
        (err , token)=>{
            res.status(201).json({message:'success' , token})       
    })
})

export{
    signup,
    signin
}