import { Router } from "express";
import authRouter from "./auth-router"
const mainRouter = Router();


mainRouter.get("/", (req, res) => {
    res.json({
        data: "Home page",
        message: "Success",
        meta: null
    });
});

mainRouter.use(authRouter)

export default mainRouter