import Joi from "joi";

const addCompanySchema = Joi.object({
    companyName:Joi.string().required(),
    description

})