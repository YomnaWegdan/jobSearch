import { Router } from "express";
import { signin, signup } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";

const userRouter = Router();

userRouter.post('/signup', checkEmail, signup)
userRouter.post('/signin', signin)


export default userRouter