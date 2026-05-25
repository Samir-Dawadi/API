import express, { Application } from "express"
import mainRouter from "./router/router";
import ErrorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware";

const app: Application = express()



//body parser
app.use(express.json({
    limit:"3mb"
}))


app.use(express.urlencoded({
    limit:"3mb"
}))

//routing
app.use(mainRouter)

app.use((req, res, next) => {
    // res.status(500).json({
    //     error: null,
    //     message: "Server Error",
    //     meta: null
    // })

    next({                                         // yo error vitra ko sab sidai ava errorhandlingmiddleware ko error ma gayera basxa 
        errors: null,
        message: "Server Error",
        meta: null
    })
})

//error handling
app.use(ErrorHandlingMiddleware)
export default app;