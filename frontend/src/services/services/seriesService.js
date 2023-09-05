import { apiGet, apiGetParticular } from "../api/apiSeries.js";

export const getSeries = async () => {
  try {
    const res = await apiGet();
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};

export const getSeriesDetails = async (id) => {
  try {
    const res = await apiGetParticular(id);
    return res;
  } catch (err) {
    console.error("Error en fetching:", err);
    throw err;
  }
};
