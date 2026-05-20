import express, { Application } from "express"

const app: Application = express()
app.get("/", (req, res) => {
    res.json({
        data: "login success",
        message: "Success",
        meta: null
    });
});
app.post("/login", (req, res) => {
    res.json({
        data: "abcd",
        message: "fail",
        meta: null
    });
});
export default app;