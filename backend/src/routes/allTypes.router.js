import { Router } from "express";
import {
  getClasificacion,
  getRecientes,
  getTendencias,
  getPopular,
  getParticular,
} from "../controllers/allTypes.controller.js";

const allTypeRouter = Router();

allTypeRouter.get("/clasificacion", getClasificacion);

allTypeRouter.get("/recientes", getRecientes);

allTypeRouter.get("/tendencias", getTendencias);

allTypeRouter.get("/popular", getPopular);

allTypeRouter.get("/:id", getParticular);

export default allTypeRouter;
