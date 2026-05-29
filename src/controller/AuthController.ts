import bcrypt from "bcryptjs"
import type { NextFunction, Request, Response } from "express"
import { AppConfig } from "../config/appconfig"

class AuthController {

    useRegister = (req: Request, res: Response, next: NextFunction) => {
        // const registerCredentials = req.body
        // res.json({                                               //success ra failure duitai ko lai pathauna res.json nai hunxa tara failure i.e error ko lagi chai next vitra hunxa 
        //     data: registerCredentials,
        //     message: "fail",
        //     meta: null,
        // });
        const data = req.body
        data.password = bcrypt.hashSync(data.password, 12)

        //file optional
        if (req.file) {
            data.image = {
                filename: req.file.filename,
                path: req.file.destination,
                type: req.file.mimetype,
                size: req.file.size,
                url: `{AppConfig.assetsUrl}user/${req.file.filename}`
            }
        }

        res.json(data)
    }

    loginUser = (req: Request, res: Response, next: NextFunction) => {

        const credentials = req.body
        res.json({                                               //success ra failure duitai ko lai pathauna res.json nai hunxa tara failure i.e error ko lagi chai next vitra hunxa 
            data: credentials,
            message: "fail",
            meta: null,
        });
    }

    activeUser = (req: Request, res: Response, next: NextFunction) => {
        next({})     //yo next vitra ahko params haru chai ava error le ligxa that is declared in the errorhandlingmiddleware
    }
    resendActivationCode = (req: Request, res: Response, next: NextFunction) => { }
    forgetPassword = (req: Request, res: Response, next: NextFunction) => { }
    verifyForgetPassworedToken = (req: Request, res: Response, next: NextFunction) => { }
    resetPassword = (req: Request, res: Response, next: NextFunction) => { }
    Logout = (req: Request, res: Response, next: NextFunction) => { }
    me = (req: Request, res: Response, next: NextFunction) => { }
    changePassword = (req: Request, res: Response, next: NextFunction) => { }

}

export default AuthController