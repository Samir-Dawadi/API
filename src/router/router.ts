import { Router } from "express";
const mainRouter = Router();


mainRouter.get("/", (req, res) => {
    res.json({
        data: "Home page",
        message: "Success",
        meta: null
    });
});
mainRouter.post("/login", (req, res) => {
    res.json({
        data: "Cannot login",
        message: "fail",
        meta: null
    });
});

export default mainRouter