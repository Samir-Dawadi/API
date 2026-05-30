import type { Response, Request, NextFunction } from "express"
import z, { ZodError } from "zod"
const bodyValidator = (schema: z.ZodType) => {                                      //this is a middleware function that takes a Zod schema as an argument and returns an Express middleware function. The purpose of this middleware is to validate the incoming request body against the provided Zod schema. If the validation is successful, it calls the next middleware in the stack; if the validation fails, it catches the error and passes a formatted error object to the next middleware for handling.
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;                                                  //here req.body gets the data from the frontend
            if (!data) {                                                            //if no data is send (empty data send) from the frontend then
                next({ code: 422, message: "Data empty/not set" })
            }

            await schema.parseAsync(data)                                             //if data is send from front end then data will be validated with the help of schema that is created using zod , if data is validated then it will go to next and ac.loginuser will be executed  //this line is used to validate the incoming request body against the provided Zod schema. The parseAsync method is an asynchronous version of the parse method, which allows for handling asynchronous validation logic if needed. If the validation is successful, it will resolve without throwing an error, and the middleware will call next() to proceed to the next middleware in the stack. If the validation fails, it will throw a ZodError, which will be caught in the catch block for error handling.
            next()                                                                      
        }
        catch (exception) {                                                              //yedi yeauta pani validation vayena vani ko case chai exception ma hunxa for eg username ma khali ani pass matra pathayo vani auxa error so testo case lai handle garna yesma use garxam                 
            let detail: Record<string, string> = {}
            if (exception instanceof ZodError) {
                exception.issues.map((errObj: any) => {
                    detail[errObj.path] = errObj.message
                })
            }
            // console.log(detail)
            next({ code: 400, message: "Validation failed", detail: detail })             //this line is used to pass an error object to the next middleware in the stack. The error object contains a status code (400), a message ("Validation failed"), and a detail object that provides specific information about which fields failed validation and why. This allows for better error handling and debugging, as it provides clear feedback on what went wrong during the validation process.
        }
    }
}

export default bodyValidator