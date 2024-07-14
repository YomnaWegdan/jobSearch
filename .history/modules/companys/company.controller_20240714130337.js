import { catchError } from "../../middlewares/catchError.js"
import { ApplicationModel } from "../../models/application.model.js"
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
    // const company = await CompanyModel.find({ companyName: { $regex: req.query.name, $options: 'i' } });
    const company = await CompanyModel.find({ companyName:  req.query.name });

    if (!company.length) return next(new appError('No companies found with the given name', 404));
    console.log('Search Query:', req.query.name);

    res.status(201).json({message:'success' , company })
})

const searchCompanyByName = (async (req, res, next) => {
    const name = req.query.name;

    console.log('Received query parameter:', name); // Debug log

    if (!name) {
        return next(new appError('Company name query parameter is required', 400));
    }

    try {
        // const companies = await CompanyModel.find({ companyName: { $regex: new RegExp(name, 'i') } });
        const company = await CompanyModel.find({ companyName: name });

        if (companies.length === 0) {
            return next(new appError('No companies found with the given name', 404));
        }

        res.status(200).json({ message: 'Success', company });
    } catch (error) {
        console.error('Search error:', error); // Debug log
        next(new appError('An error occurred while searching for companies', 500));
    }
});



const getApplicationsForJob = catchError(async (req, res, next) => {
    const { jobId } = req.params;

    const job = await JobModel.findById(jobId);
    if (!job) return next(new appError('Job not found', 404));

    if (job.addedBy.toString() !== req.user._id.toString()) {
        return next(new appError('Unauthorized access to this job\'s applications', 403));
    }

    const applications = await ApplicationModel.find({ jobId })
        .populate({
            path: 'userId',
            select: 'name email' 
        });

    res.status(200).json({ message: 'success', applications });
});


export {
    addCompany , updateCompany , deleteCompany , getCompanyData , searchCompanyByName , getApplicationsForJob
}