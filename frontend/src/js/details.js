import { getParticular } from "../services/services/allTypesService.js";

const urlParams = new URLSearchParams(window.location.search);
const sectionParticular = document.getElementById("section-particular");
const trailer = document.getElementById("trailer-video");

const id = urlParams.get("id");

getParticular(id).then((res) =>
  res.data.map((particular) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    trailer.src = particular.Trailer;
    img.src = particular.Poster;
    img.alt = `Poster de ${particular.Title}`;
    article.appendChild(img);
    h1.textContent = particular.Title;
    h3.textContent = particular.Plot;
    p1.textContent = particular.Released;
    p2.textContent = `imdbrating: ${particular.imdbRating}`;
    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    sectionParticular.appendChild(article);
    sectionParticular.appendChild(div);
  })
);
