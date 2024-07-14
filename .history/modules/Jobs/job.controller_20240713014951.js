import { catchError } from "../../middlewares/catchError.js"
import { JobModel } from "../../models/job.model.js"

const addJob=catchError( async (req,res)=>{
    const job = await JobModel.insertMany(req.body) 
    res.status(201).json({message :'add successful' , job})
})

const updateJob = catchError(async (req, res, next) => {
    const job = await JobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return next(new appError('job not found', 404));
    res.status(200).json({ message: 'update successful', job });
})

const deleteJob = catchError(async (req, res, next) => {
    const job = await JobModel.findByIdAndDelete(req.params.id);
    if (!job) return next(new appError('job not found', 404));
    res.status(200).json({ message: 'delete successful', job });
})
const getAllJobsWithTheirsCompanies = catchError(async (req, res, next) => {
    const jobs = await JobModel.find(); 
    if (!jobs) return next(new appError('jobs not found', 404));
    res.status(200).json({ message: 'success', jobs });
})

const getJobsOfSpacificCompany = catchError(async (req, res, next) => {
    const jobs = await JobModel.find({ 'company.name': req.query.companyName });
    if (!jobs) return next(new appError('jobs not found', 404));
    res.status(200).json({ message: 'success', jobs });
})
export{ 
    addJob , updateJob , deleteJob , getAllJobsWithTheirsCompanies , getJobsOfSpacificCompany
}