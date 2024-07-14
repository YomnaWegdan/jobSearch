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

  const updateSchema = Joi.object({
    email: Joi.string().email().optional(),
    mobileNumber: Joi.string().optional(),
    recoveryEmail: Joi.string().email().optional(),
    DOB: Joi.date().optional(),
    lastName: Joi.string().optional(),
    firstName: Joi.string().optional()
  });

  const updatePasswordSchema = Joi.object({
    currentPassword: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required()
  });

  const recoveryEmailSchema = Joi.object({
    recoveryEmail: Joi.string().email().required()
  });

  export { signupValSchema  , signInSchema , updateSchema , updatePasswordSchema , recoveryEmailSchema}