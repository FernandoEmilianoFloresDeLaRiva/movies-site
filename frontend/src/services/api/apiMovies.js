import { movie_Url } from "../../constants/movie_url.js";

export const apiGet = async () => {
  const res = await fetch(movie_Url);
  return res.json();
};
