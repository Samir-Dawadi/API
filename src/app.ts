import express, { Application } from "express"
import mainRouter from "./router/router";
import ErrorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware";

const app: Application = express()

//routing
app.use(mainRouter)


//error handling
app.use(ErrorHandlingMiddleware)
export default app;