import { CompanyModel } from "../../models/company.model.js"

const addCompany =async ()=>{
    const company = await CompanyModel.insertMany()
}