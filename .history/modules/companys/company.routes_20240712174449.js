import { Router } from "express";
import { addCompany, deleteCompany, getCompanyData, updateCompany } from "./company.controller.js";
import { validate } from "../../middlewares/validate.js";
import { addCompanySchema, updateCompanySchema } from "./company.validation.js";

const companyRouter = Router();
companyRouter.use(ver)
companyRouter.post('/' , validate(addCompanySchema),  addCompany)
companyRouter.put('/:id' , validate(updateCompanySchema),  updateCompany)
companyRouter.delete('/:id' ,  deleteCompany)
companyRouter.get('/' ,  getCompanyData)



export default companyRouter 