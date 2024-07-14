import Joi from "joi";

const addCompanySchema = Joi.object({
    companyName:Joi.string().required(),
    description:Joi.string().required(),
    industry:Joi.string().required(),
    address:Joi.string().required(),
    numberOfEmployees:Joi.number().required(),
    companyEmail:Joi.string().email().required(),
    companyHr:Joi.string()

})


const updateCompanySchema = Joi.object({
    companyName:Joi.string().optional(),
    description:Joi.string().optional(),
    industry:Joi.string().optional(),
    address:Joi.string().optional(),
    numberOfEmployees:Joi.number().optional(),
    companyEmail:Joi.string().email().required(),
    companyHr:Joi.string()

})
export {addCompanySchema}