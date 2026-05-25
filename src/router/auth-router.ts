import { NextFunction, Router, type Request, type Response } from "express";
import AuthController from "../controller/AuthController"
import checklogin from "../middleware/AuthMiddleware";
import z from "zod"
import bodyValidator from "../middleware/ValidationMiddleware"
import ErrorHandlingMiddleware from "../middleware/ErrorHandlingMiddleware";
import { loginDTO } from "../request/AuthRequest";


const authRouter = Router()

// const register = (req:Request,res:Response)=>{}

const ac = new AuthController()

// const loginDTO = z.object({                                       //this validation is created in another folder
//     username: z.string().nonempty().nonoptional(),
//     password: z.string().nonempty().nonoptional()
// })

authRouter.post("/login", bodyValidator(loginDTO), ac.loginUser);           //validation done using zod
authRouter.post('/register', ac.useRegister);
authRouter.post('/active-user', ac.activeUser);
authRouter.post('/resend-activation-code', ac.resendActivationCode);

authRouter.post('/forget-password', ac.forgetPassword);
authRouter.post('/verify-forget-password-token', ac.verifyForgetPassworedToken);
authRouter.post('/reset-password', ac.resetPassword);



//can be only accessed by logged in user , so before we do the loggout we must check that the user is logged in or not and that condition occurs for this below three route and that ccondition (logged or not) is checked by the middleware  


authRouter.post('/logout', checklogin(), ac.Logout);
authRouter.get('/me', checklogin(), ac.me);
authRouter.post('/change-password', checklogin(), ac.changePassword);

export default authRouter;







