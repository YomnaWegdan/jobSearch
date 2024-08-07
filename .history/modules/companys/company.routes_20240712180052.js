import { Router } from "express";
import { addCompany, deleteCompany, getCompanyData, updateCompany } from "./company.controller.js";
import { validate } from "../../middlewares/validate.js";
import { addCompanySchema, updateCompanySchema } from "./company.validation.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";

const companyRouter = Router();
companyRouter.use(verifyToken)
companyRouter.post('/' , authorizeRole('Company_HR'),  validate(addCompanySchema),  addCompany)
companyRouter.put('/:id' , validate(updateCompanySchema),  updateCompany)
companyRouter.delete('/:id' ,  deleteCompany)
companyRouter.get('/' ,  getCompanyData)



export default companyRouter 