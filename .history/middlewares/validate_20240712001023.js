
export const validate = (schema) =>{
    return async (req , res , next)=>{
        let {error} = schema.validate(req.body , {abortEarly: false})
        if(!error){
           next()
        }
        else{
            res.json({message: error?.details[0].message}) //res.json({message: error?.details})
        }
    }
}