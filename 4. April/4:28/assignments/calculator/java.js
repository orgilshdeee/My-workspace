//
const xhrMovies = new XMLHttpRequest();

xhrMovies.onreadystatechange = function () {
  const datas = JSON.parse(this.responseText);
};

xhrMovies.open("GET", "/java.js", true);
xhrMovies.send();
