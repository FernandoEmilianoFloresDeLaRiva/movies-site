import films from "../data/film.json" assert { type: "json" };

export const getPopular = () => {
  return new Promise((resolve, reject) => {
    try {
      const filterFilms = films.filter((film) => !film.ComingSoon);
      const sortFilms = filterFilms.sort(
        (filmA, filmB) =>
          parseFloat(filmB.imdbRating) - parseFloat(filmA.imdbRating)
      );
      resolve(sortFilms);
    } catch (err) {
      reject(err);
    }
  });
};

export const getRecientes = () => {
  return new Promise((resolve, reject) => {
    try {
      const filterFilms = films.filter((film) => !film.ComingSoon);
      const sortFilms = filterFilms.sort(
        (filmA, filmB) => new Date(filmB.Released) - new Date(filmA.Released)
      );
      resolve(sortFilms);
    } catch (err) {
      reject(err);
    }
  });
};
