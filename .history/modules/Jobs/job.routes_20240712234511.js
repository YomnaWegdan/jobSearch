import { Router } from "express";
import { addJob } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole";
import { validate } from "../../middlewares/validate.js";

const JobRouter = Router()

JobRouter.post('/' ,authorizeRole('Company_HR') , validate(J)  , addJob)
export default JobRouter