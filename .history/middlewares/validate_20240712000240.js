export const validate = (req , res , next) =>{
    return async (req , res , next)=>{
        let {error} = valSchema.validate(req.body , {abortEarly: false})
        if(!error){
           
        }
        else{
            res.json({message: error?.details[0].message})
        }
    }
}