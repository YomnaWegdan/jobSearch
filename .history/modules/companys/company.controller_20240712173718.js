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
    const user = await UserModel.findByIdAndDelete({_id:req.params.id})
    if(!user) return next(new appError('user not found' , 404))

    res.status(201).json({message :'Account deleted successfully.' , user})

})

export {
    addCompany , updateCompany
}