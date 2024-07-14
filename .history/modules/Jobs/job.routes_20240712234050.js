import { Router } from "express";
import { addJob } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole";

const JobRouter = Router()

JobRouter.post('/' ,authorizeRole('Company_HR')  , addJob)
export default JobRouter