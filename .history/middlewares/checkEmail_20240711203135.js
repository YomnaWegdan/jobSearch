const checkEmail=async (req , res , next)=>{

    const {email}=req.body
    const user = await User.findOne({email})
    if(user) return res.status(409).json({message : 'Email already exists'})
    next()
}