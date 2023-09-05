import * as seriesService from "../services/series.service.js";

export const getAll = (req, res) => {
  seriesService
    .getAll()
    .then((result) =>
      res.status(200).json({
        data: result,
      })
    )
    .catch((err) => res.status(500).send(err));
};

export const getById = (req, res) => {
  const { id } = req.params;
  seriesService
    .getById(id)
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    })
    .catch((err) => res.status(500).send(err));
};