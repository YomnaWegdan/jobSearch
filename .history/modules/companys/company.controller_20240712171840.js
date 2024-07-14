import { CompanyModel } from "../../models/company.model.js"

const addCompany =async ()=>{
    const company = await CompanyModel.insertMany(req.body)
    res.status(201).json({message :'success' , company})

}