const select = document.getElementById("genres");
const card = document.querySelector(".cards");

// fetch

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => displayMovies(data));
// .then((data) => sortByGenre(data));
// functions

// function getData(movieData) {
//   return movieData;
// }

function displayMovies(data) {
  console.log(data);
  data.map((movie) => {
    card.innerHTML += `
    <div class="cardInfo col-3">
      <img src=" ${movie.imageURL}" class="w-100">
      <h3>${movie.title}</h3>
      <div class="d-flex justify-content-between">
        <p>Genre: ${movie.genre}</p>
        <p>Date: ${movie.date}</p>
      </div>
      <p>${movie.body}</p>
    </div>
   `;
  });
}

function getGenre() {
  let genre = select.value;
  console.log(genre);
}

select.addEventListener("change", getGenre);
