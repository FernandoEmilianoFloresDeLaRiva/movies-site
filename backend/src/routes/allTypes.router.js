import { Router } from "express";
import {
  getPopular,
  getRecientes,
} from "../controllers/allTypes.controller.js";

const allTypeRouter = Router();

allTypeRouter.get("/popular", getPopular);

allTypeRouter.get("/recientes", getRecientes);

export default allTypeRouter;
