const signup=async(req,res)=>{
    const user = await User.insertMany(req.body) 
    user[0].password = undefined 
    res.status(201).json({message :'success' , user})
}

export{
    signup
}