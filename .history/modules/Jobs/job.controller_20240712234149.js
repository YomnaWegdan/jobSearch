import { catchError } from "../../middlewares/catchError.js"

const addJob=catchError( async (req,res)=>{
    const job = await JobMo.insertMany(req.body) 
    res.status(201).json({message :'success' , job})
})

export{
    addJob
}