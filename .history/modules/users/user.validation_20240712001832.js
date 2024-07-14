import Joi from "joi";

const signupValSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    recoveryEmail: Joi.string().email(),
    DOB: Joi.date().required(),
    mobileNumber: Joi.number().required(),
    role: Joi.string().valid('User', 'Company_HR').required()
  });
  const signInSchema = Joi.object({
    email: Joi.string().email().optional(),
    recoveryEmail: Joi.string().email().optional(),
    mobileNumber: Joi.string().optional(),
    password: Joi.string().required()
  }).or('email', 'recoveryEmail', 'mobileNumber');


  export { signupValSchema  , signInSchema}