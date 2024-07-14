import { Router } from "express";
import { addJob } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";
import { validate } from "../../middlewares/validate.js";
import jobValidationSchema from "./job.validation.js";

const JobRouter = Router()

JobRouter.post('/' ,authorizeRole('Company_HR') , validate(jobValidationSchema)  , addJob)
export default JobRouter