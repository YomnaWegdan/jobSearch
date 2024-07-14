import Joi from 'joi';

const jobValidationSchema = Joi.object({
    jobTitle: Joi.string().required(),
    jobLocation: Joi.string().valid('Remote', 'Onsite', 'Hybrid').required(),
    workingTime: Joi.string().valid('Full time', 'Part time').required(),
    seniorityLevel: Joi.string().valid('Junior', 'Mid-Level', 'Senior', 'Team-Lead', 'CTO').required(),
    jobDescription: Joi.string().required(),
    technicalSkills: Joi.array().items(Joi.string()).required(), 
    softSkills: Joi.array().items(Joi.string()).required(), // Array of strings
    experience: Joi.string().required(),
    salary: Joi.string().required(),
    jobType: Joi.string().required(),
    jobCategory: Joi.string().required(),
    addedBy: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required() // Valid ObjectId pattern
});

export default jobValidationSchema;
