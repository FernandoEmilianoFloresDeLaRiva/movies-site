import films from "../data/film.json" assert { type: "json" };

export const getAll = () => {
  return new Promise((resolve, reject) => {
    try {
      const filteredFilms = films.filter(
        (film) => film.Type === "movie" && !film.ComingSoon
      );
      resolve(filteredFilms);
    } catch (err) {
      reject(err);
    }
  });
};

export const getById = (id) => {
  return new Promise((resolve, reject) => {
    try {
      const filteredFilm = films.find((film) => film.imdbID === id);
      resolve(filteredFilm);
    } catch (err) {
      reject(err);
    }
  });
};
