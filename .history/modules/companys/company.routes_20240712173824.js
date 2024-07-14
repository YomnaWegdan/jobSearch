import { Router } from "express";
import { addCompany, updateCompany } from "./company.controller.js";
import { validate } from "../../middlewares/validate.js";
import { addCompanySchema, updateCompanySchema } from "./company.validation.js";

const companyRouter = Router();
companyRouter.post('/' , validate(addCompanySchema),  addCompany)
companyRouter.put('/:id' , validate(updateCompanySchema),  updateCompany)
companyRouter.delete('/:id'   updateCompany)


export default companyRouter 