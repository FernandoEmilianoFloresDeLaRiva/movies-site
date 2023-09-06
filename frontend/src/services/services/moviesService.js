import { apiGet } from "../api/apiMovies.js";

export const getMovie = async () => {
  try {
    const res = await apiGet();
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};
