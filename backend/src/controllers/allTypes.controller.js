import * as allTypesServices from "../services/allTypes.service.js";

export const getPopular = (req, res) => {
  allTypesServices
    .getPopular()
    .then((result) =>
      res.status(200).json({
        data: result,
      })
    )
    .catch((err) => res.status(500).send(err));
};

export const getRecientes = (req, res) => {
  allTypesServices
    .getRecientes()
    .then((result) =>
      res.status(200).json({
        data: result,
      })
    )
    .catch((err) => res.status(500).send(err));
};
