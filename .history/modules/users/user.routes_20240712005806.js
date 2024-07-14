import { Router } from "express";
import { deleteUser, signin, signup, updateUser } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";
import { validate } from "../../middlewares/validate.js";
import { signInSchema, signupValSchema, updateSchema } from "./user.validation.js";

const userRouter = Router();

userRouter.post('/signup', validate(signupValSchema) , checkEmail, signup)
userRouter.post('/signin' , validate(signInSchema), signin)
userRouter.put('/:id' , validate(updateSchema), verifyToken, updateUser)
userRouter.delete('/:id' ,  deleteUser)




export default userRouter