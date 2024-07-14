import { catchError } from "../../middlewares/catchError.js"
import { JobModel } from "../../models/job.model.js"

const addJob=catchError( async (req,res)=>{
    const job = await JobModel.insertMany(req.body) 
    res.status(201).json({message :'success' , job})
})

const updateJob = catchError

export{
    addJob
}