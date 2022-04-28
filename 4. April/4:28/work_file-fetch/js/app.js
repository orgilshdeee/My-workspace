const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => generateOpt(data.message));
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => generateImage(data.message));
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateImage(url) {
  const html = `<img src="${url}">`;
  document.querySelector(".card").innerHTML = html;
}
function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector("img");

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res) => res.json())
    .then((dogImg) => {
      img.src = dogImg.message;
    });
}
function generateOpt(breeds) {
  breeds.map((breed) => {
    select.innerHTML += `<option value="${breed}">${breed}</option>`;
  });
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener("change", fetchBreedImage);
card.addEventListener("click", fetchBreedImage);
form.addEventListener("submit", postData);
// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name: name, comment: comment }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
