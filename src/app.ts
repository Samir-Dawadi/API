import express, { Application } from "express"
import mainRouter from "./router/router";
import ErrorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware";

const app: Application = express()



//body parser i.e FrontEnd(for now we use postman) bata backend ma data receive garni tarika
app.use(express.json({                                   //for raw data 
    limit: "3mb"                                          //max 3mb of data can be sent to backend from frontend(postman) we can change the value of limit
}))


app.use(express.urlencoded({                             //for x-www-form-urlencoded data
    limit: "3mb"
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