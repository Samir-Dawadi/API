import { Router } from "express";

const authRouter = Router()

authRouter.post("/auth/login", (req, res) => {
    res.json({
        data: "Cannot login check your username and password again",
        message: "fail",
        meta: null
    });
});
authRouter.post('/register',(req,res)=>{});
authRouter.post('/active-user',(req,res)=>{});
authRouter.post('/resend-activation-code',(req,res)=>{});
authRouter.post('/forget-password',(req,res)=>{});
authRouter.post('/verify-forget-password-token',(req,res)=>{});
authRouter.post('/reset-password',(req,res)=>{});
authRouter.post('/logout',(req,res)=>{});
authRouter.get('/me',(req,res)=>{});
authRouter.post('/change-password',(req,res)=>{});

export default authRouter;