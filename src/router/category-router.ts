import { Router, type Request, type Response } from "express";
import CategoryController from "../controller/CategoryController";
const CategoryRouter = Router()

// const register = (req:Request,res:Response)=>{}

const cc = new CategoryController()


CategoryRouter.post("/create", cc.CreateCategory);
CategoryRouter.get('/list', cc.ListCategpry);
CategoryRouter.put('/CategoryUpdate ', cc.UpdateCategory);
CategoryRouter.delete('/CategoryDelete ', cc.DeleteCategory);
CategoryRouter.delete('/ViewCategoryDetail ', cc.ViewCategoryDetail);



export default CategoryRouter;