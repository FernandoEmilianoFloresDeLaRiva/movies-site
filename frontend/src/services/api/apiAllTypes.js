import { allTypes_Url } from "../../constants/allTypes_Url.js";

export const apiGet = async (endPoint) => {
  const res = await fetch(`${allTypes_Url}/${endPoint}`);
  return res.json();
};
