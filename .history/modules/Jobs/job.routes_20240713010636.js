import { Router } from "express";
import { addJob, deleteJob, getAllJobsCompany, getJobsOfSpacificCompany, updateJob } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";
import { validate } from "../../middlewares/validate.js";
import {jobValidationSchema, updateJobValidationSchema} from "./job.validation.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const JobRouter = Router()
JobRouter.use(verifyToken)

JobRouter.post('/' ,authorizeRole('Company_HR') , validate(jobValidationSchema)  , addJob)
JobRouter.put('/' ,authorizeRole('Company_HR') , validate(updateJobValidationSchema)  , updateJob)
JobRouter.delete('/' ,authorizeRole('Company_HR') ,  deleteJob)
JobRouter.get('/' ,authorizeRole(['Company_HR' , 'User']) ,  getAllJobsCompany)
JobRouter.get('/company' ,authorizeRole(['Company_HR' , 'User']) ,  getJobsOfSpacificCompany)
//jobs/company?companyName=TechCorp
export default JobRouter


/*

{
        "_id": "60c72b2f9b1d4c0017e4b8b1",
        "jobTitle": "Software Engineer",
        "jobLocation": "Remote",
        "workingTime": "Full time",
        "seniorityLevel": "Mid-Level",
        "jobDescription": "Develop and maintain software applications.",
        "technicalSkills": ["JavaScript", "Node.js"],
        "softSkills": ["Communication", "Teamwork"],
        "experience": "3-5 years",
        "salary": "$80,000 - $100,000",
        "jobType": "Permanent",
        "jobCategory": "IT",
        "addedBy": "60c72b2e9b1d4c0017e4b8b0",
        "company": {
            "name": "TechCorp",
            "info": "A leading technology company."
        }
    },
*/
 