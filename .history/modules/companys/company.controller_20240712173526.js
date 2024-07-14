import { CompanyModel } from "../../models/company.model.js"
import { appError } from "../../utilities/appError.js"

const addCompany =async ()=>{
    const company = await CompanyModel.insertMany(req.body)
    res.status(201).json({message :'add successful' , company})
}

const updateCompany =async ()=>{
    const company = await CompanyModel.findByIdAndUpdate({_id:req.params.id } , req.body , {new:true})
    if(!company) return next(new appError('company not found' , 404))

        await user.save()
    res.status(201).json({message :'update successful' , company})
}

export {
    addCompany , updateCompany
}