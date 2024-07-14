import { catchError } from "../../middlewares/catchError.js"
import { ApplicationModel } from "../../models/application.model.js"
import { CompanyModel } from "../../models/company.model.js"
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
    const jobs = await JobModel.find({}) .populate({
        path: 'companyId', 
        select: 'companyName description industry address numberOfEmployees companyEmail' // Fields to include from Company schema
    });
    if (!jobs) return next(new appError('jobs not found', 404));
    res.status(200).json({ message: 'success', jobs });
})

const getJobsOfSpacificCompany = catchError(async (req, res, next) => {
    const company = await CompanyModel.findOne({ companyName: req.query.companyName });
    if (!company) {
        return next(new appError('Company not found', 404));
    }
    const jobs = await JobModel.find({ companyId: company._id }).populate({
        path: 'companyId',
        select: 'companyName description industry address numberOfEmployees companyEmail' // Fields to include from Company schema
    });

    // const jobs = await JobModel.find({companyName: req.query.companyName }).populate({
    //     path: 'companyId', 
    //     select: 'companyName description industry address numberOfEmployees companyEmail' // Fields to include from Company schema
    // });
    if (!jobs) return next(new appError('jobs not found', 404));
    res.status(200).json({ message: 'success', jobs });
})

const applyToJob = catchError(async(req , res , next)=>{
    

    const job = await JobModel.findById(req.body.jobId);
    if (!job) return next(new appError('Job not found', 404));

    req.bod
    const application = await ApplicationModel.insertMany(req.body) 
    res.status(201).json({message :'add Resume successful' , application})

})
export{ 
    addJob , updateJob , deleteJob , getAllJobsWithTheirsCompanies , getJobsOfSpacificCompany , applyToJob
}