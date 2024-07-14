import { Router } from "express";
import { addJob } from "./job.controller.js";

const JobRouter = Router()

JobRouter.post('/' ,au  , addJob)
export default JobRouter