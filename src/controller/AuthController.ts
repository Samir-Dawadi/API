import type{Request , Response} from "express"

class AuthController{

    useRegister=(req:Request,res:Response)=>{}

    loginUser=(req:Request, res:Response) => {
    res.json({
        data: "Cannot login check your username and password again",
        message: "fail",
        meta: null
    });
}


}

export default AuthController