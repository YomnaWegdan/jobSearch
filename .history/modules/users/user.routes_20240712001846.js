import { Router } from "express";
import { signin, signup } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";
import { validate } from "../../middlewares/validate.js";
import { signupValSchema } from "./user.validation.js";

const userRouter = Router();

userRouter.post('/signup', validate(signupValSchema) , checkEmail, signup)
userRouter.post('/signin' , validate(s), signin)


export default userRouter