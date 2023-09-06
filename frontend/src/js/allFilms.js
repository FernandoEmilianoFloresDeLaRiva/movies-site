import { getMovie } from "../services/services/moviesService.js";
import { getSeries } from "../services/services/seriesService.js";
import {
  getRecientes,
  getPopular,
} from "../services/services/allTypesService.js";

const urlParams = new URLSearchParams(window.location.search);
const asunto = urlParams.get("asunto");
const section = document.getElementById("allFilms");

switch (asunto) {
  case "peliculas":
    getMovie().then((res) => {
      res.data.map((pelicula) => {
        const article = createArticles(pelicula);
        section.appendChild(article);
      });
    });
    break;
  case "series":
    getSeries().then((res) => {
      res.data.map((serie) => {
        const article = createArticles(serie);
        section.appendChild(article);
      });
    });
    break;
  case "popular":
    getPopular().then((res) => {
      res.data.map((popular) => {
        const article = createArticles(popular);
        section.appendChild(article);
      });
    });
    break;
  case "recientes":
    getRecientes().then((res) => {
      res.data.map((reciente) => {
        const article = createArticles(reciente);
        section.appendChild(article);
      });
    });
    break;
  default:
    console.log("Asunto no registrado");
    break;
}

const createArticles = (pelicula) => {
  const article = document.createElement("article");
  const figure = document.createElement("figure");
  const button = document.createElement("button");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  img.src = pelicula.Poster;
  img.alt = `Poster de ${pelicula.Title}`;
  button.onclick = function () {
    detailsMovie(pelicula.imdbID);
  };
  figcaption.textContent = pelicula.Title;
  button.appendChild(img);
  figure.appendChild(figcaption);
  figure.appendChild(button);
  article.appendChild(figure);
  return article;
};

const detailsMovie = (id) => {
  const url = `../pages/details.html?id=${encodeURIComponent(id)}`;
  window.location.href = url;
};
