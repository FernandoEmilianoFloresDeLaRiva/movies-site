import { apiGet } from "../api/apiSeries.js";

export const getSeries = async () => {
  try {
    const res = await apiGet();
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};
