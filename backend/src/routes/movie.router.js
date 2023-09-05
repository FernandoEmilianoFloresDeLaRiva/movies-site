import { Router } from "express";
import { getAll, getById } from "../controllers/movies.controller.js";

const movieRouter = Router();

movieRouter.get("/", getAll);

movieRouter.get("/:id", getById);

export default movieRouter;
