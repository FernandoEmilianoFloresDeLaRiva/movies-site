import { apiGet, apiGetParticular } from "../api/apiMovies";

export const getMovie = async () => {
  try {
    const res = await apiGet();
    const objetoRes = {
      Title: res.data.Title,
      Poster: res.data.Poster,
    };
    return objetoRes;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await apiGetParticular(id);
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};
