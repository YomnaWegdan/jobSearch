const signup=async(req,res)=>{
    const user = await .insertMany(req.body) 
    user[0].password = undefined 
    res.status(201).json({message :'success' , user})
}

export{
    signup
}