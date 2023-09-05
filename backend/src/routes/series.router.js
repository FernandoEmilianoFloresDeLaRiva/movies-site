import { Router } from "express";
import { getAll, getById } from "../controllers/series.controller.js";

const seriesRouter = Router();

seriesRouter.get("/", getAll);

seriesRouter.get("/:id", getById)

export default seriesRouter;
