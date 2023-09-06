import { Router } from "express";
import { getAll } from "../controllers/series.controller.js";

const seriesRouter = Router();

seriesRouter.get("/", getAll);

export default seriesRouter;
