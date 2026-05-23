import type { Request, Response, NextFunction } from "express"

const checklogin = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log("i am in checklogin ")

        //can manipulate the request,
        //respond to the client,
        //can send to error handling middleware

        // if(userIsLogin){
        //     next();
        // }
        // else{
        //     res.json({
        //     //....
        //     })
        // }

        next()
    }
}

export default checklogin