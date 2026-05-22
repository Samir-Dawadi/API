import express, { Application } from "express"
import mainRouter from "./router/router";
import ErrorHandler from "./middleware/ErrorHandlingMiddleware";

const app: Application = express()

//routing
app.use(mainRouter)

app.use(ErrorHandler)
export default app;