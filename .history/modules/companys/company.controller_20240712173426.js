import { CompanyModel } from "../../models/company.model.js"

const addCompany =async ()=>{
    const company = await CompanyModel.insertMany(req.body)
    res.status(201).json({message :'add successful' , company})
}

const updateCompany =async ()=>{
    const company = await CompanyModel.findByIdAndUpdate({_id:req.params.id } , req.body , {new:true})
    res.status(201).json({message :'upd successful' , company})
}

export {
    addCompany
}