import { catchError } from "../../middlewares/catchError.js"
import { CompanyModel } from "../../models/company.model.js"
import { JobModel } from "../../models/job.model.js"
import { appError } from "../../utilities/appError.js"

const addCompany =catchError( async (req, res, next)=>{
    const company = await CompanyModel.insertMany(req.body)
    if(!company) return next(new appError('company not found' , 404))

    res.status(201).json({message :'add successful' , company})
})

const updateCompany =catchError( async (req, res, next)=>{
    const company = await CompanyModel.findByIdAndUpdate({_id:req.params.id } , req.body , {new:true})
    if(!company) return next(new appError('company not found' , 404))

    await company.save()
    res.status(201).json({message :'update successful' , company})
})

const deleteCompany = catchError(async (req, res, next) => {
    const company = await CompanyModel.findByIdAndDelete({_id:req.params.id})
    if(!company) return next(new appError('company not found' , 404))

    res.status(201).json({message :'company deleted successfully.' , company})

})

const getCompanyData = catchError(async(req , res , next)=>{
    const company = await CompanyModel.find({_id:req.params.id})
    res.status(201).json({message:'success' , company } )

})

const searchCompanyByName = catchError(async(req , res , next)=>{
    const company = await CompanyModel.find({companyName:{$regex:req.query.name ,$options:'i'}})
    if (!company.length) return next(new appError('No companies found with the given name', 404));

    res.status(201).json({message:'success' , company })
})

const getApplicationsForJob = catchError(async (req, res, next) => {
    const { jobId } = req.params;

    const job = await JobModel.findById(jobId);
    if (!job) return next(new appError('Job not found', 404));

    if (job.addedBy.toString() !== req.user._id.toString()) {
        return next(new appError('Unauthorized access to this job\'s applications', 403));
    }

    // Fetch applications and populate user data
    const applications = await App.find({ jobId })
        .populate({
            path: 'userId',
            select: 'name email' // Return only the necessary user fields
        });

    res.status(200).json({ message: 'success', applications });
});

export { getApplicationsForJob };

export {
    addCompany , updateCompany , deleteCompany , getCompanyData , searchCompanyByName
}