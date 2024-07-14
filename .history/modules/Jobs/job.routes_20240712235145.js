import { Router } from "express";
import { addJob, updateJob } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";
import { validate } from "../../middlewares/validate.js";
import jobValidationSchema, { updateJobValidationSchema } from "./job.validation.js";

const JobRouter = Router()

JobRouter.post('/' ,authorizeRole('Company_HR') , validate(jobValidationSchema)  , addJob)
JobRouter.put('/' ,authorizeRole('Company_HR') , validate(updateJobValidationSchema)  , updateJob)
JobRouter.delete('/' ,authorizeRole('Company_HR') ,  updateJob)

export default JobRouter