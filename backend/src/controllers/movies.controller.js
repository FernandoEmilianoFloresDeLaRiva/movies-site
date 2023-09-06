import * as moviesService from "../services/movie.service.js";

export const getAll = (req, res) => {
  moviesService
    .getAll()
    .then((result) =>
      res.status(200).json({
        data: result,
      })
    )
    .catch((err) => res.status(500).send(err));
};
