import express from "express";
import { shoppingController, muffineController, cakeController } from "../controllers/shoppingController.js"

const shoppingRouter = express.Router();

shoppingRouter.get("/", shoppingController)
shoppingRouter.get("/muffine", muffineController)
shoppingRouter.get("/cake", cakeController)

export default shoppingRouter