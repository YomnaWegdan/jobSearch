import { Router } from "express";
import { addJob, deleteJob, getAllJobsCompany, getJobsOfSpacificCompany, updateJob } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";
import { validate } from "../../middlewares/validate.js";
import jobValidationSchema, { updateJobValidationSchema } from "./job.validation.js";

const JobRouter = Router()

JobRouter.post('/' ,authorizeRole('Company_HR') , validate(jobValidationSchema)  , addJob)
JobRouter.put('/' ,authorizeRole('Company_HR') , validate(updateJobValidationSchema)  , updateJob)
JobRouter.delete('/' ,authorizeRole('Company_HR') ,  deleteJob)
JobRouter.get('/' ,authorizeRole(['Company_HR' , 'User']) ,  getAllJobsCompany)
JobRouter.get('/company' ,authorizeRole(['Company_HR' , 'User']) ,  getJobsOfSpacificCompany)
//jobs/company?companyName=TechCorp
export default JobRouter