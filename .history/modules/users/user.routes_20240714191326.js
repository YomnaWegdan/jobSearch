import { Router } from "express";
import { deleteUser, getAccountsByRecoveryEmail, getProfileData, getUserData, resetPassword, signin, signup, updatePassword, updateUser } from "./user.controller.js";
import checkEmail from "../../middlewares/checkEmail.js";
import { validate } from "../../middlewares/validate.js";
import { recoveryEmailSchema, resetPasswordSchema, signInSchema, signupValSchema, updatePasswordSchema, updateSchema } from "./user.validation.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { requestOTP } from "../../utilities/email.js";

const userRouter = Router();

userRouter.post('/signup', validate(signupValSchema) , checkEmail, signup)
userRouter.post('/signin' , validate(signInSchema), signin)
userRouter.put('/:id' , validate(updateSchema), verifyToken, updateUser)
userRouter.delete('/:id' , verifyToken, deleteUser)
userRouter.get('/' , verifyToken, getUserData)
userRouter.get('/:id' , verifyToken, getProfileData)
userRouter.put('/updatePassword', validate(updatePasswordSchema), verifyToken, updatePassword);

userRouter.post('/requestOTP', requestOTP);
userRouter.post('/resetPassword', validate(resetPasswordSchema), resetPassword);
userRouter.post('/getAccountsByRecoveryEmail', getAccountsByRecoveryEmail);


userRouter.post('/' , validate(recoveryEmailSchema) , getAccountsByRecoveryEmail)

export default userRouter