import type { Response, Request, NextFunction } from "express"
import z, { ZodError } from "zod"
const bodyValidator = (schema: z.ZodType) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;                                                  //here req.body gets the data from the frontend
            if (!data) { 
                next({ code: 422, message: "Data empty/not set" })
            }

            await schema.parseAsync(data)
            next()
        }
        catch (exception) {
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