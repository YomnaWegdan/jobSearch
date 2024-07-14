import { Router } from "express";
import { signup } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";

const userRouter = Router();

userRouter.post('/signup', checkEmail signup)

export default userRouter