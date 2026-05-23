import type { NextFunction, Request, Response } from "express";

export default function ErrorHandlingMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {

    res.json({
        error: null,                                   //success ko case ma yeha data hunthe tara yo error handling ho so error aru same as in res.json for the success case
        message: "Accessed denied",
        meta: null
    })

}