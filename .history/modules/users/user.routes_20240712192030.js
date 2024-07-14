import { Router } from "express";
import { deleteUser, getAccountsByRecoveryEmail, getProfileData, getUserData, signin, signup, updatePassword, updateUser } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";
import { validate } from "../../middlewares/validate.js";
import { recoveryEmailSchema, signInSchema, signupValSchema, updateSchema } from "./user.validation.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const userRouter = Router();

userRouter.post('/signup', validate(signupValSchema) , checkEmail, signup)
userRouter.post('/signin' , validate(signInSchema), signin)
userRouter.put('/:id' , validate(updateSchema), verifyToken, updateUser)
userRouter.delete('/:id' , verifyToken, deleteUser)
userRouter.get('/' , verifyToken, getUserData)
userRouter.get('/:id' , verifyToken, getProfileData)
userRouter.put('/' , validate(updatePassword), verifyToken, updatePassword)

userRouter.post('/' , validate(recoveryEmailSchema) , getAccountsByRecoveryEmail)

export default userRouter