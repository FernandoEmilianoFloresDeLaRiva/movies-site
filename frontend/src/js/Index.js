import {
  getTendencias,
  getPopular,
  getClasificacion,
} from "../services/services/allTypesService.js";

const sectionTendencias = document.getElementById("tendencias");
const sectionPopular = document.getElementById("popular");
const sectionClasificacion = document.getElementById("clasificacion");

getTendencias().then((res) =>
  res.data.map((popular) => {
    const article = document.createElement("article");
    const figure = document.createElement("figure");
    const button = document.createElement("button");
    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");
    const div = document.createElement("div");
    const p = document.createElement("p");
    img.src = popular.Poster;
    img.alt = `Poster de ${popular.Title}`;
    button.appendChild(img);
    button.value = popular.imdbID;
    figCaption.textContent = popular.Title;
    div.className = "contenido-movie";
    p.textContent = popular.Plot;
    figure.appendChild(button);
    figure.appendChild(figCaption);
    div.appendChild(p);
    article.className = "pelicula-art";
    article.appendChild(figure);
    article.appendChild(div);
    sectionTendencias.appendChild(article);
  })
);

getPopular()
  .then((res) => res.data.slice(0, 5))
  .then((res) =>
    res.map((popular) => {
      const article = document.createElement("article");
      const figure = document.createElement("figure");
      const button = document.createElement("button");
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      const div = document.createElement("div");
      const p = document.createElement("p");
      img.src = popular.Poster;
      img.alt = `Poster de ${popular.Title}`;
      button.appendChild(img);
      button.value = popular.imdbID;
      figCaption.textContent = popular.Title;
      div.className = "contenido-movie";
      p.textContent = popular.Plot;
      figure.appendChild(button);
      figure.appendChild(figCaption);
      div.appendChild(p);
      article.className = "pelicula-art";
      article.appendChild(figure);
      article.appendChild(div);
      sectionPopular.appendChild(article);
    })
  );

getClasificacion()
  .then((res) => res.data.slice(0, 4))
  .then((res) =>
    res.map((popular) => {
      const article = document.createElement("article");
      const figure = document.createElement("figure");
      const button = document.createElement("button");
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      const div = document.createElement("div");
      const p = document.createElement("p");
      img.src = popular.Poster;
      img.alt = `Poster de ${popular.Title}`;
      button.appendChild(img);
      button.value = popular.imdbID;
      figCaption.textContent = popular.Title;
      div.className = "contenido-movie";
      p.textContent = popular.Plot;
      figure.appendChild(button);
      figure.appendChild(figCaption);
      div.appendChild(p);
      article.className = "pelicula-art";
      article.appendChild(figure);
      article.appendChild(div);
      sectionClasificacion.appendChild(article);
    })
  );

console.log(sectionTendencias, sectionPopular, sectionClasificacion);
