
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


export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: true });
        if (error) {
            const errors = error.details.map(detail => ({
                message: detail.message,
                path: detail.path
            }));
            return res.status(400).json({ message: 'Validation error', errors });
        }
        next();
    };
};
