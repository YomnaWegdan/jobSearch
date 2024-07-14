import Joi from "joi";

const valSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    recoveryEmail: Joi.string().email(),
    DOB: Joi.date().required(),
    mobileNumber: Joi.number().required(),
    role: Joi.string().valid('User', 'Company_HR').required()
  });


  export default valSchema