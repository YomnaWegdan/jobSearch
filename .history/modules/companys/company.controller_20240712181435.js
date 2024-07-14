import { catchError } from "../../middlewares/catchError.js"
import { CompanyModel } from "../../models/company.model.js"
import { appError } from "../../utilities/appError.js"

const addCompany =catchError( async ()=>{
    const company = await CompanyModel.insertMany(req.body)
    if(!company) return next(new appError('company not found' , 404))

    res.status(201).json({message :'add successful' , company})
})

const updateCompany =catchError( async ()=>{
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
    const company = await CompanyModel.find({company:req.company.id})
    res.status(201).json({message:'success' , company } )

})

const searchCompanyByName = catchError(async(req , res , next)=>{
    const company = await CompanyModel.find({companyName:{$regex:req.query.name ,$options:'i'}})
    if (!company.length) return next(new appError('No companies found with the given name', 404));

    res.status(201).json({message:'success' , company } )
})

export {
    addCompany , updateCompany , deleteCompany , getCompanyData
}