import { Router } from "express";
import { addCompany, deleteCompany, updateCompany } from "./company.controller.js";
import { validate } from "../../middlewares/validate.js";
import { addCompanySchema, updateCompanySchema } from "./company.validation.js";

const companyRouter = Router();
companyRouter.post('/' , validate(addCompanySchema),  addCompany)
companyRouter.put('/:id' , validate(updateCompanySchema),  updateCompany)
companyRouter.delete('/:id' ,  deleteCompany)


export default companyRouter 