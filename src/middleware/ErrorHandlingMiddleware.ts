import type { NextFunction, Request, Response } from "express";



export interface CustomError extends Error {
    detail?: Record<string, string | Array<Record<string, string>>> | null | number
}

export default function ErrorHandlingMiddleware(error: CustomError, req: Request, res: Response, next: NextFunction) {         //Error chai yeauta interface ho 

    let detail = error.detail || error.stack || null

    res.status(200).json({                             //by defaullt res.json is always 2xx i.e success
        error: detail,                                   //success ko case ma yeha data hunthe tara yo error handling ho so error aru same as in res.json for the success case
        message: "Accessed denied",
        meta: null
    })

}