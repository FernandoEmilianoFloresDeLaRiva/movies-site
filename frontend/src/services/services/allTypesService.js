import { apiGet } from "../api/apiAllTypes.js";

export const getPopular = async () => {
  try {
    const res = apiGet("popular");
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};

export const getRecientes = async () => {
  try {
    const res = apiGet("recientes");
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};
