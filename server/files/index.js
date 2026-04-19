import {ElementBuilder, ParentChildBuilder} from "./builders.js";

class ParagraphBuilder extends ParentChildBuilder {
  constructor() {
    super("p", "span");
  }
}

class ListBuilder extends ParentChildBuilder {
  constructor() {
    super("ul", "li");
  }
}

function formatRuntime(runtime) {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return hours + "h " + minutes + "m";
}

function appendMovie(movie, element) {
  const article = new ElementBuilder("article").id(movie.imdbID)
      .append(new ElementBuilder("img").with("src", movie.Poster))
      .append(new ElementBuilder("h1").text(movie.Title))

  article.append(new ElementBuilder("p")
      .append(new ElementBuilder("button").class("edit-button").text("Edit")
          .listener("click", () => location.href = "edit.html?imdbID=" + movie.imdbID)));

  article.append(new ElementBuilder("p").class("meta")
      .append(new ElementBuilder("strong").text("Runtime: "))
      .append(new ElementBuilder("span").text(formatRuntime(movie.Runtime) + " • "))
      .append(new ElementBuilder("strong").text("Released: "))
      .append(new ElementBuilder("span").text(movie.Released)));

  article.append(new ParagraphBuilder().childClass("genre").items(movie.Genres));


  article.append(new ElementBuilder("p").text(movie.Plot))
      .append(new ElementBuilder("h3").text("Actors"))
      .append(new ListBuilder().items(movie.Actors)) // Nutzt den ListBuilder
      .append(new ElementBuilder("h3").text("Directors"))
      .append(new ListBuilder().items(movie.Directors));

  article.appendTo(element);
}

function loadMovies(genre) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const mainElement = document.querySelector("main");
    /*
        while (mainElement.childElementCount > 0) {
          mainElement.firstChild.remove()
        }
        */
    while (mainElement.firstChild) {
      mainElement.removeChild(mainElement.firstChild);
    }

    if (xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText)
      for (const movie of movies) {
        appendMovie(movie, mainElement)
      }
    } else {
      mainElement.append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }
  }

  const url = new URL("/movies", location.href)
  /* Task 1.4. Add query parameter to the url if a genre is given */
  if (genre) {
    url.searchParams.set('genre', genre);
  }

  xhr.open("GET", url)
  xhr.send()
}

window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const listElement = document.querySelector("nav>ul");

    if (xhr.status === 200) {
      /* Task 1.3. Add the genre buttons to the listElement and
         initialize them with a click handler that calls the
         loadMovies(...) function above. */
      const genres = JSON.parse(xhr.responseText);

      //All Buttom
      const allLi = document.createElement("li");
      const allBtn = document.createElement("button");
      allBtn.textContent = "All";
      allBtn.onclick = () => loadMovies();
      allLi.appendChild(allBtn);
      listElement.appendChild(allLi);

      // Genre Buttons dynamisch hinzufügen
      genres.forEach(genre => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = genre;
        btn.onclick = () => loadMovies(genre);
        li.appendChild(btn);
        listElement.appendChild(li);
      });

      // All Button klicken um alles zu laden
      listElement.querySelector("button").click();
    }

    /* When a first button exists, we click it to load all movies. */
    /*
        const firstButton = document.querySelector("nav button");
        if (firstButton) {
            firstButton.click();
        }
    } else {
        document.querySelector("body").append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }*/
  };
  xhr.open("GET", "/genres");
  xhr.send();
};
