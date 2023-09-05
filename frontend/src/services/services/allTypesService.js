import { apiGet } from "../api/apiAllTypes.js";

export const getClasificacion = async () => {
  try {
    const res = await apiGet("clasificacion");
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};

export const getRecientes = async () => {
  try {
    const res = await apiGet("recientes");
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};

export const getTendencias = async () => {
  try {
    const res = await apiGet("tendencias");
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};

export const getPopular = async () => {
  try {
    const res = await apiGet("popular");
    return res;
  } catch (err) {
    console.err("Error en fetching:", err);
    throw err;
  }
};
