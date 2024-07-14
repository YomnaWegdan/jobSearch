import { Router } from "express";
import { signin, signup } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";
import { validate } from "../../middlewares/validate.js";
import { valSchema } from "./user.validation.js";

const userRouter = Router();

userRouter.post('/signup', validate(valSchema) , checkEmail, signup)
userRouter.post('/signin', signin)


export default userRouter