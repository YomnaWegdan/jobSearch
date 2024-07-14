import { Router } from "express";
import { signup } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";

const userRouter = Router();

userRouter.post('/signup', checkEmail, signup)
userRouter.post('/signin', sign)


export default userRouter