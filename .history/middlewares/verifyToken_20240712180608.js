import jwt from 'jsonwebtoken'

export const verifyToken=async (req , res , next)=>{
    let {token} = req.headers
    if(!token) return res.status(401).json({message:'invalid token'})
    jwt.verify(token , "secretkeymysecretkey" ,async (err , decoded)=>{
        if(err) return res.status(401).json({message:'invalid token'})
        req.user= decoded; 
       next()
    })
}