import { Router } from "express";
import { addJob } from "./job.controller";

const JobRouter = Router()

JobRouter.post('/' , addJob)
export default JobRouter