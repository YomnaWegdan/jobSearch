import { Router } from "express";
import { addJob, applyToJob, deleteJob, filterJobs, getAllJobsWithTheirsCompanies, getJobsOfSpacificCompany, updateJob, uploadResume } from "./job.controller.js";
import { authorizeRole } from "../../middlewares/authorizeRole.js";
import { validate } from "../../middlewares/validate.js";
import {applyToJobValSchema, jobValidationSchema, updateJobValidationSchema} from "./job.validation.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const JobRouter = Router()
// JobRouter.use(verifyToken)

JobRouter.post('/' ,authorizeRole('Company_HR') , validate(jobValidationSchema)  , addJob)
JobRouter.put('/:id' ,authorizeRole('Company_HR') , validate(updateJobValidationSchema)  , updateJob)
JobRouter.delete('/:id' ,authorizeRole('Company_HR') ,  deleteJob)
JobRouter.get('/'  ,  getAllJobsWithTheirsCompanies)
JobRouter.get('/company' ,  getJobsOfSpacificCompany)
JobRouter.get('/filter' ,  filterJobs)



JobRouter.post('/apply'   , validate(applyToJobValSchema) , upload.single('userResume'). uploadResume , applyToJob)

export default JobRouter


/*
{
    "jobTitle": "Front-End Developer",
    "jobLocation": "Remote",
    "workingTime": "Full time",
    "seniorityLevel": "Mid-Level",
    "jobDescription": "Responsible for client-side web application logic and integration of the work back-end developers do.",
    "technicalSkills": ["js", "TypeScript", "React.js", "bootstrap"],
    "softSkills": ["Time management", "Team worker", "Problem solving"],
    "experience": "3-5 years",
    "salary": "$40,000 - $60,000",
    "jobType": "Permanent",
    "jobCategory": "IT",
    "addedBy": "66916040fe94bd25f9eb120a"  
}
*/
 