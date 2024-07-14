import { Router } from "express";
import { addCompany, deleteCompany, getApplicationsForJob, getCompanyData, searchCompanyByName, updateCompany } from "./company.controller.js";
import { validate } from "../../middlewares/validate.js";
import { addCompanySchema, updateCompanySchema } from "./company.validation.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";

const companyRouter = Router();
companyRouter.use(verifyToken)

companyRouter.post('/' , authorizeRole('Company_HR'),  validate(addCompanySchema),  addCompany)
companyRouter.put('/:id' ,  authorizeRole('Company_HR'), validate(updateCompanySchema),  updateCompany)
companyRouter.delete('/:id' , authorizeRole('Company_HR'),  deleteCompany)
companyRouter.get('/:id' , authorizeRole('Company_HR'),  getCompanyData)
companyRouter.get('/search' ,  searchCompanyByName)
companyRouter.get('/getApplications' , authorizeRole('Company_HR'),  getApplicationsForJob)

// companyRouter.get('/search' , authorizeRole(['Company_HR', 'User']),  searchCompanyByName)





export default companyRouter 