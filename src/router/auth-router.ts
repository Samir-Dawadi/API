import { Router } from "express";

const authRouter = Router()

authRouter.post("/auth/login", (req, res) => {
    res.json({
        data: "Cannot login check your username and password again",
        message: "fail",
        meta: null
    });
});

export default authRouter;