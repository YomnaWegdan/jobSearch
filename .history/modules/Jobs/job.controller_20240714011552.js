import { catchError } from "../../middlewares/catchError.js"
import upload from "../../middlewares/uploadResume.js"
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
    try {
        // Find the company
        const company = await CompanyModel.findOne({ companyName: req.query.companyName });
        if (!company) {
            return next(new appError('Company not found', 404));
        }

        console.log('Company ID:', company._id);

        // Find jobs for this company
        const jobs = await JobModel.find({ companyId: company._id }).populate({
            path: 'companyId',
            select: 'companyName description industry address numberOfEmployees companyEmail'
        });

        console.log('Jobs Query Result:', jobs);

        if (!jobs.length) {
            return next(new appError('No jobs found for this company', 404));
        }

        res.status(200).json({ message: 'success', jobs });
    } catch (error) {
        console.error('Error:', error);
        return next(new appError('An error occurred while fetching jobs', 500));
    }
});


const getJobsOfSpacificCompany = catchError(async (req, res, next) => {
    // Find the company based on companyName
    const company = await CompanyModel.findOne({ companyName: req.query.companyName });
    if (!company) {
        return next(new appError('Company not found', 404));
    }

    // Find jobs associated with this company
    const jobs = await JobModel.find({ companyId: company._id }).populate({
        path: 'companyId',
        select: 'companyName description industry address numberOfEmployees companyEmail' // Fields to include from Company schema
    });

     if (!jobs) return next(new appError('jobs not found', 404));
    res.status(200).json({ message: 'success', jobs });
});
const filterJobs = catchError(async (req, res, next) => {
    const { workingTime,jobLocation, seniorityLevel, jobTitle,technicalSkills} = req.query;
    const query = {};

    if (workingTime) {
        query.workingTime = workingTime;
    }
    if (jobLocation) {
        query.jobLocation = jobLocation;
    }
    if (seniorityLevel) {
        query.seniorityLevel = seniorityLevel;
    }
    if (jobTitle) {
        query.jobTitle = new RegExp(jobTitle, 'i'); 
    }
    if (technicalSkills) {
        query.technicalSkills = { $all: technicalSkills.split(',') }; // Assuming technicalSkills is a comma-separated string
    }
    const jobs = await JobModel.find(query);
    if (!jobs) return next(new appError('jobs not found', 404));
    res.status(200).json({ message: 'success', jobs });
})

const applyToJob = catchError(async(req , res , next)=>{
    

    const job = await JobModel.findById(req.body.jobId);
    if (!job) return next(new appError('Job not found', 404));

    req.body.userResume = req.file.path;
    const application = await ApplicationModel.insertMany(req.body) 
    res.status(201).json({message :'add Resume successful' , application})

})
const uploadResume = upload.single('resume');

export{ 
    addJob , updateJob , deleteJob , getAllJobsWithTheirsCompanies , getJobsOfSpacificCompany ,
    filterJobs , applyToJob
    , uploadResume}