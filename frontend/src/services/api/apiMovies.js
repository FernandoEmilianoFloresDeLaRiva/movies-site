import { movie_Url } from "../../constants/movie_url";

export const apiGet = async () => {
  const res = await fetch(movie_Url);
  return res.json();
};

export const apiGetParticular = async (id) => {
    const res = await fetch(`${movie_Url}/${id}`)
    return res.json()
}