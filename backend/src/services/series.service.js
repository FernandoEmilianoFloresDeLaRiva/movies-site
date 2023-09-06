import films from "../data/film.json" assert { type: "json" };

export const getAll = () => {
  return new Promise((resolve, reject) => {
    try {
      const filteredFilms = films.filter(
        (film) => film.Type === "series" && !film.ComingSoon
      );
      resolve(filteredFilms);
    } catch (err) {
      reject(err);
    }
  });
};
