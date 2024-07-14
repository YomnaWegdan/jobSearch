
// export const validate = (schema) =>{
//     return async (req , res , next)=>{
//         console.log('Request Body in Validation Middleware:', req.body);
//         let {error} = schema.validate(req.body , {abortEarly: false})
//         if(!error){
//            next()
//         }
//         else{
//             console.log('Validation Error:', error.details);
//             res.json({message: error?.details[0].message}) 
//         }
//     }
// }