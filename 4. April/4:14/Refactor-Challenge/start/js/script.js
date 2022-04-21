let html = "";
function randomColor() {
  return Math.floor(Math.random() * 256);
}

for (i = 1; i <= 10; i++) {
  let randomRGB = `rgb( ${randomColor()}, ${randomColor()}, ${randomColor()} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}
document.querySelector("main").innerHTML = html;
