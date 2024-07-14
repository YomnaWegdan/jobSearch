import { UserModel } from "../../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { appError } from "../../utilities/appError.js"
import { catchError } from "../../middlewares/catchError.js"

const signup=catchError( async(req,res)=>{
    req.body.userName=  `${req.body.firstName} ${req.body.lastName}`;

    const user = await UserModel.insertMany(req.body) 
    console.log(req.body.userName)
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
    const user = await UserModel.findByIdAndUpdate({_id:req.params.id } , req.body , {new:true})
    if(!user) return next(new appError('user not found' , 404))

    await user.save()
    res.status(201).json({message :'success' , user})
})

const deleteUser = catchError(async (req, res, next) => {
    const user = await UserModel.findByIdAndDelete({_id:req.params.id})
    if(!user) return next(new appError('user not found' , 404))

    res.status(201).json({message :'Account deleted successfully.' , user})

})

const getUserData = catchError(async (req, res, next) => {
    const user = await UserModel.findById(req.user._id)
    if(!user) return next(new appError('user not found' , 404))
    
    res.status(201).json({ message: 'success' ,user})

    })
const getProfileData = catchError(async (req, res, next) => {
    const user = await UserModel.findById(req.params.id)    
    if(!user) return next(new appError('user not found' , 404))
    
    res.status(201).json({ message: 'success' ,user})
})

const updatePassword = catchError(async (req, res, next) => {
    const user = await UserModel.findById(req.user._id);
    if(!user) return next(new appError('user not found' , 404))
  
    const isMatch = await bcrypt.compare(req.body.currentPassword, user.password);
    if (!isMatch) return next(new appError('Current password is incorrect', 400));
  
    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();
  
    res.status(200).json({ message: 'Password updated successfully' });
})

const getAccountsByRecoveryEmail = catchError(async (req, res, next) => {
    const { recoveryEmail } = req.body;
  
    const users = await UserModel.find({ recoveryEmail });
    if (users.length === 0) {
      return next(new AppError('No accounts found with the specified recovery email', 404));
    }
  
    res.status(200).json({message: 'Success',users});
  });

export{
    signup,
    signin, updateUser , deleteUser , getUserData , getProfileData , updatePassword,
    getAccountsByRecoveryEmail
}