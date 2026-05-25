import type { Response, Request, NextFunction } from "express"
import z, { ZodError } from "zod"
const bodyValidator = (schema: z.ZodType) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;                                                  //here req.body gets the data from the frontend
            if (!data) {                                                            //if no data is send (empty data send) from the frontend then
                next({ code: 422, message: "Data empty/not set" })
            }

            await schema.parseAsync(data)                                               //if data is send from front end then data will be validated with the help of schema that is created using zod , if data is validated then it will go to next and it ac.loginuser will be executed
            next()                                                                      
        }
        catch (exception) {                                                              //yedi yeauta pani validation vayena vani ko case chai exception ma hunxa                     
            let detail: Record<string, string> = {}
            if (exception instanceof ZodError) {
                exception.issues.map((errObj: any) => {
                    detail[errObj.path] = errObj.message
                })
            }
            // console.log(detail)
            next({ code: 400, message: "Validation failed", detail: detail })
        }
    }
}

export default bodyValidator