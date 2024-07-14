import { Router } from "express";
import { addJob, applyToJob, deleteJob, filterJobs, getAllJobsWithTheirsCompanies, getJobsOfSpacificCompany, updateJob } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";
import { validate } from "../../middlewares/validate.js";
import {applyToJobValSchema, jobValidationSchema, updateJobValidationSchema} from "./job.validation.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import upload from "../../middlewares/uploadResume.js";

const JobRouter = Router()
JobRouter.use(verifyToken)

JobRouter.post('/' ,authorizeRole('Company_HR') , validate(jobValidationSchema)  , addJob)
JobRouter.put('/:id' ,authorizeRole('Company_HR') , validate(updateJobValidationSchema)  , updateJob)
JobRouter.delete('/:id' ,authorizeRole('Company_HR') ,  deleteJob)
JobRouter.get('/'  ,  getAllJobsWithTheirsCompanies)
JobRouter.get('/company' ,  getJobsOfSpacificCompany)
JobRouter.get('/filter' ,  filterJobs)



JobRouter.post('/apply'   , upload.single('userResume') , validate(applyToJobValSchema) , applyToJob)

export default JobRouter

