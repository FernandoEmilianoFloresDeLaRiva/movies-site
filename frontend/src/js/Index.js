import {
  getTendencias,
  getPopular,
  getClasificacion,
} from "../services/services/allTypesService.js";

const sectionTendencias = document.getElementById("tendencias");
const sectionPopular = document.getElementById("popular");
const sectionClasificacion = document.getElementById("clasificacion");
const btnGotham = document.getElementById("btnGotham");

getTendencias().then((res) =>
  res.data.map((tendencia) => {
    const article = createArticles(tendencia);
    sectionTendencias.appendChild(article);
  })
);

getPopular()
  .then((res) => res.data.slice(0, 5))
  .then((res) =>
    res.map((popular) => {
      const article = createArticles(popular);
      sectionPopular.appendChild(article);
    })
  );

getClasificacion()
  .then((res) => res.data.slice(0, 4))
  .then((res) =>
    res.map((clasificacion) => {
      const article = createArticles(clasificacion);
      sectionClasificacion.appendChild(article);
    })
  );

const createArticles = (pelicula) => {
  const article = document.createElement("article");
  const figure = document.createElement("figure");
  const button = document.createElement("button");
  const img = document.createElement("img");
  const figCaption = document.createElement("figcaption");
  const div = document.createElement("div");
  const p = document.createElement("p");
  img.src = pelicula.Poster;
  img.alt = `Poster de ${pelicula.Title}`;
  button.appendChild(img);
  button.onclick = function () {
    detailsMovie(pelicula.imdbID);
  };
  figCaption.textContent = pelicula.Title;
  div.className = "contenido-movie";
  p.textContent = pelicula.Plot;
  figure.appendChild(button);
  figure.appendChild(figCaption);
  div.appendChild(p);
  article.className = "pelicula-art";
  article.appendChild(figure);
  article.appendChild(div);
  return article;
};

const detailsMovie = (id) => {
  const url = `./src/pages/details.html?id=${encodeURIComponent(id)}`;
  window.location.href = url;
};

btnGotham.addEventListener("click", function () {
  const id = "tt3749900";
  detailsMovie(id);
});

const abrirModal = document.getElementById("abrirModalBtn");
const cerrarModal = document.getElementById("cerrarModalBtn");
const videoModal = document.getElementById("videoModal");

abrirModal.addEventListener("click", () => {
  videoModal.style.display = "block";
});

cerrarModal.addEventListener("click", () => {
  videoModal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
});
