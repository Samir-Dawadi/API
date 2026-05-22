import { NextFunction, Router, type Request, type Response } from "express";
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



//can be only accessed by logged in user , so before we do the loggout we must check that the user is logged in or not and that condition occurs for this below three route and that ccondition (logged or not) is checked by the middleware  


// authRouter.post('/logout', (req:Request,res:Response,next:NextFunction)=>{                         //yeha bichama middleware ca yesari lekhna ni milxa xutai file ma kina banayo vani yo tintai route ko main vaneko suru ma login ca ki xaina herana parxa ni balla logout , /me , change pass garna milxa so we define the common function in the middleware function 
//     console.log("Check that user is logged in or not and apply logic based on that ")
//     next()                                                                                         //yo next without params ho , next le matra chai arko tallo line execute garna help garxa
// }, ac.Logout);

authRouter.post('/logout', checklogin(), ac.Logout);
authRouter.get('/me', checklogin(), ac.me);
authRouter.post('/change-password', checklogin(), ac.changePassword);

export default authRouter;