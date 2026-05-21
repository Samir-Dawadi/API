import type { Request, Response } from "express"

class AuthController {

    useRegister = (req: Request, res: Response) => { }

    loginUser = (req: Request, res: Response) => {
        res.json({
            data: "Cannot login check your username and password again",
            message: "fail",
            meta: null
        });
    }

    activeUser=(req: Request, res: Response) => { }
    resendActivationCode=(req: Request, res: Response) => { }
    forgetPassword=(req: Request, res: Response) => { }
    verifyForgetPassworedToken=(req: Request, res: Response) => { }
    resetPassword=(req: Request, res: Response) => { }
    Logout=(req: Request, res: Response) => { }
    me=(req: Request, res: Response) => { }
    changePassword=(req: Request, res: Response) => { }

}

export default AuthController