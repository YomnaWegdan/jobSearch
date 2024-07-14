export const validate = (req , res , next) =>{
    return (req , res , next)=>{
        let {error} = valSchema.validate(req.body , {abortEarly: false})
        if(!error){
            const user = await UserModel.insertMany(req.body) 
            user[0].password = undefined 
            res.status(201).json({message :'success' , user})
        }
        else{
            res.json({message: error?.details[0].message})
        }
    }
}