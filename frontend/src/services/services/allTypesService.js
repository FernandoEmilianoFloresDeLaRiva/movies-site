import { apiGet } from "../api/apiAllTypes";

export const getPopular = async () => {
  try {
    const res = apiGet("popular");
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

export const getRecientes = async () => {
  try {
    const res = apiGet("recientes");
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
