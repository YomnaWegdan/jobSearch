import Joi from "joi";

const addCompanySchema = Joi.object({
    companyName:Joi.string().required(),
    description:Joi.string().required(),
    industry:Joi.string().required(),
    address:Joi.string().required(),
    numberOfEmployees:Joi.string().valid('11-20', '21-50', '51-100', '101-200', '201-500', '500+').required(),
    companyEmail:Joi.string().email().required(),
    companyHr:Joi.string()

})


const updateCompanySchema = Joi.object({
    companyName:Joi.string().optional(),
    description:Joi.string().optional(),
    industry:Joi.string().optional(),
    address:Joi.string().optional(),
    numberOfEmployees:Joi.string().valid('11-20', '21-50', '51-100', '101-200', '201-500', '500+').optional(),
    companyEmail:Joi.string().email().optional(),

})
export {addCompanySchema , updateCompanySchema}