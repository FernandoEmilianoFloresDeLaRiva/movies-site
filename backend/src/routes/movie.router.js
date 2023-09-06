import { Router } from "express";
import { getAll } from "../controllers/movies.controller.js";

const movieRouter = Router();

movieRouter.get("/", getAll);

export default movieRouter;
