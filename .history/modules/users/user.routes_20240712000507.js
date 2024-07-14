import { Router } from "express";
import { signin, signup } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";
import { validate } from "../../middlewares/validate.js";

const userRouter = Router();

userRouter.post('/signup', validate() , checkEmail, signup)
userRouter.post('/signin', signin)


export default userRouter