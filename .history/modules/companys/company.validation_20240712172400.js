import Joi from "joi";

const addCompanySchema = Joi.object({
    companyName:Joi.string().required(),
    description:Joi.string().required(),
    industry:Joi.string().required(),
    address:Joi.string().required(),
    numberOfEmployees

})