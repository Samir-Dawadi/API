import { Router, type Request, type Response } from "express";
import AuthController from "../controller/AuthController"
import checklogin from "../middleware/AuthMiddleware";
const authRouter = Router()

// const register = (req:Request,res:Response)=>{}

const ac = new AuthController()


authRouter.post("/auth/login", ac.loginUser);
authRouter.post('/register', ac.useRegister);
authRouter.post('/active-user', ac.activeUser);
authRouter.post('/resend-activation-code', ac.resendActivationCode);

authRouter.post('/forget-password', ac.forgetPassword);
authRouter.post('/verify-forget-password-token', ac.verifyForgetPassworedToken);
authRouter.post('/reset-password', ac.resetPassword);

//can be only accessed by logged in user
authRouter.post('/logout', checklogin, ac.Logout);
authRouter.get('/me', checklogin, ac.me);
authRouter.post('/change-password', checklogin, ac.changePassword);

export default authRouter;