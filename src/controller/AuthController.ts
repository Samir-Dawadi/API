import type { NextFunction, Request, Response } from "express"

class AuthController {

    useRegister = (req: Request, res: Response , next:NextFunction) => { }

    loginUser = (req: Request, res: Response , next:NextFunction) => {
        res.json({                                               //success ra failure duitai ko lai pathauna res.json nai hunxa tara failure i.e error ko lagi chai next vitra hunxa 
            data: "Cannot login check your username and password again",
            message: "fail",
            meta: null
        });
    }

    activeUser=(req: Request, res: Response , next:NextFunction) => { 
        next({})     //yo next vitra ahko params haru chai ava error le ligxa that is declared in the errorhandlingmiddleware
    }
    resendActivationCode=(req: Request, res: Response , next:NextFunction) => { }
    forgetPassword=(req: Request, res: Response , next:NextFunction) => { }
    verifyForgetPassworedToken=(req: Request, res: Response , next:NextFunction) => { }
    resetPassword=(req: Request, res: Response , next:NextFunction) => { }
    Logout=(req: Request, res: Response , next:NextFunction) => { }
    me=(req: Request, res: Response , next:NextFunction) => { }
    changePassword=(req: Request, res: Response , next:NextFunction) => { }

}

export default AuthController