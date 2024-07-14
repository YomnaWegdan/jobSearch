export const globalError= app.use((err , req , res , next)=> {
    let code = err.statusCode || 5000
    res.status(code).json({error:"error" ,message:err.message , code , stack:err.stack})}) 
