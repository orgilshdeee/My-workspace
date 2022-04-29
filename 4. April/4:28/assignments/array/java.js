const card = document.querySelector(".cards");
const all = document.getElementById("all");
const crime = document.getElementById("crime");
const bio = document.getElementById("bio");
const drama = document.getElementById("drama");
const musical = document.getElementById("musical");

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => displayMovies(data));
 
function displayMovies(data) {
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

function displayCrime(){
  card.innerHTML = ``;
  fetch("/data.json")
  .then((res) => res.json())
  .then((data) => saveData(data));
  function saveData(data){
    const filtered = data.filter(sortCrime)
    displayMovies(filtered)
  }
  function sortCrime(a){
    return a.genre == "Crime";
  }
}
function displayBio(){
  card.innerHTML = ``;
  fetch("/data.json")
  .then((res) => res.json())
  .then((data) => saveData(data));
  function saveData(data){
    const filtered = data.filter(sortBio)
    displayMovies(filtered)
  }
  function sortBio(a){
    return a.genre == "Biography";
  }
}
function displayDrama(){
  card.innerHTML = ``;
  fetch("/data.json")
  .then((res) => res.json())
  .then((data) => saveData(data));
  function saveData(data){
    const filtered = data.filter(sortBio)
    displayMovies(filtered)
  }
  function sortBio(a){
    return a.genre == "Drama";
  }
}
function displayMusical(){
  card.innerHTML = ``;
  fetch("/data.json")
  .then((res) => res.json())
  .then((data) => saveData(data));
  function saveData(data){
    const filtered = data.filter(sortBio)
    displayMovies(filtered)
  }
  function sortBio(a){
    return a.genre == "Musical";
  }
}
function showAll(){
  card.innerHTML = ``;
  fetch("/data.json")
  .then((res) => res.json())
  .then((data) => displayMovies(data));
}

all.addEventListener("click", showAll);
crime.addEventListener("click", displayCrime);
bio.addEventListener("click", displayBio);
drama.addEventListener("click", displayDrama);
musical.addEventListener("click", displayMusical);

const up = document.getElementById("up");
const down = document.getElementById("down");

function test (){
  console.log("test")
}

up.addEventListener("click",test1);
down.addEventListener("click",test2);

function test1(){
  fetch("/data.json")
  .then((res) => res.json())
  .then((data) => saveData(data));
  
  function saveData(data){
    data.sort( (var1, var2) => {
    const com1 = new Date(var1.date)
    const com2 = new Date(var2.date)
    console.log(com1);
    console.log(com2);
    if(com1 < com2){
    return -1;
    }
    if(com1 > com2){
    return 1;
    }
    return 0;
    })
    card.innerHTML = "";
    displayMovies(data)
  }   
}

function test2(){
  fetch("/data.json")
  .then((res) => res.json())
  .then((data) => saveData(data));
  
  function saveData(data){
    data.sort( (var1, var2) => {
    const com1 = new Date(var1.date)
    const com2 = new Date(var2.date)
    if(com2 < com1){
    return -1;
    }
    if(com2 > com1){
    return 1;
    }
    return 0;
    })
    card.innerHTML = "";
    displayMovies(data)
  }   
}