import { Router, type Request, type Response } from "express";
import AuthController from "../controller/AuthController"
const authRouter = Router()

// const register = (req:Request,res:Response)=>{}

const ac = new AuthController()


authRouter.post("/auth/login", ac.loginUser);
authRouter.post('/register', ac.useRegister);
authRouter.post('/active-user', (req, res) => { });
authRouter.post('/resend-activation-code', (req, res) => { });
authRouter.post('/forget-password', (req, res) => { });
authRouter.post('/verify-forget-password-token', (req, res) => { });
authRouter.post('/reset-password', (req, res) => { });
authRouter.post('/logout', (req, res) => { });
authRouter.get('/me', (req, res) => { });
authRouter.post('/change-password', (req, res) => { });

export default authRouter;