export const validate = (req , res , next) =>{
    return async (req , res , next)=>{
        let {error} = valSc.validate(req.body , {abortEarly: false})
        if(!error){
           next()
        }
        else{
            res.json({message: error?.details[0].message}) //res.json({message: error?.details})
        }
    }
}