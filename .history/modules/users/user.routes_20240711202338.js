import { Router } from "express";

const userRouter = Router();

userRouter.post('/signup', signup)

export default userRouter