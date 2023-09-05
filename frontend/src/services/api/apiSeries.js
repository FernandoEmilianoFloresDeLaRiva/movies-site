import { serie_url } from "../../constants/serie_url.js";

export const apiGet = async () => {
  const res = await fetch(serie_url);
  return res.json();
};

export const apiGetParticular = async (id) => {
  const res = await fetch(`${serie_url}/${id}`);
  return res.json();
};
