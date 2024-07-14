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

const signin= catchError( async (req,res , next)=>{
    const { email, password, recoveryEmail, mobileNumber } = req.body;
    const user = await UserModel.findOne({ $or: [{ email }, { recoveryEmail }, { mobileNumber }] });

    if(!user || ! bcrypt.compareSync(password , user.password))  return next(new appError('wrong Email or password' , 404))   
    
    jwt.sign({ _id: user._id, role: user.role }, "secretkeymysecretkey",
        (err , token)=>{
            res.status(201).json({message:'success' , token})       
    }) 
    user.status = 'online'
    await user.save()   

})

const updateUser=catchError( async (req,res , next)=>{
    // const user = await UserModel.findByIdAndUpdate(req.user._id);
    // if(!user) return next(new appError('user not found' , 404))

    // const updates = Object.keys(req.body);
    // updates.forEach(update => {
    // user[update] = req.body[update];
    // });

    await user.save()
    res.status(201).json({message :'success' , user})
})

const deleteUser = catchError(async (req, res, next) => {
    const user = await UserModel.findByIdAndDelete({_id:req.params.id})
    if(!user) return next(new appError('user not found' , 404))

    res.status(201).json({message :'Account deleted successfully.' , user})

})


export{
    signup,
    signin, updateUser , deleteUser
}