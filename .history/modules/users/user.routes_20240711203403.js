import { Router } from "express";
import { signup } from "./user.controller.js";

const userRouter = Router();

userRouter.post('/signup', check signup)

export default userRouter