import type {Request , Response , NextFunction } from "express"

const checklogin = (req:Request , res:Response , next:NextFunction)=>{
    console.log("i am in checklogin ")

    next()
}

export default checklogin