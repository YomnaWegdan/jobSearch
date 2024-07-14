import { Router } from "express";
import { addJob } from "./job.controller.js";

const JobRouter = Router()

JobRouter.post('/' , addJob)
export default JobRouter