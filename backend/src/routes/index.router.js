import { Router } from "express";
import allTypeRouter from "./allTypes.router.js";
import seriesRouter from "./series.router.js";
import movieRouter from "./movie.router.js";

const prefijo = "/api";

const indexRouter = Router();

indexRouter.get(prefijo, (req, res) => {
  res.send("Bienvenido a mi api").status(200);
});

indexRouter.use(`${prefijo}/movies`, movieRouter);
indexRouter.use(`${prefijo}/series`, seriesRouter);
indexRouter.use(`${prefijo}/todos`, allTypeRouter);

export default indexRouter;
