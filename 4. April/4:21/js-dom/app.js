const btnClick = document.getElementById("btn-main");

btnClick.addEventListener("click", () => {
  console.log("Button clicked");
  btnClick.textContent = `Boo!`;
});

function getRGB() {
  let a1 = Math.floor(Math.random() * 255) + 1;
  let a2 = Math.floor(Math.random() * 255) + 1;
  let a3 = Math.floor(Math.random() * 255) + 1;
  return `rgb(${a1}, ${a2}, ${a3})`;
}

const lists = document.getElementsByTagName("li");

const arr = [...lists];

arr.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    li.style.color = `${getRGB()}`;
  });
  li.addEventListener("mouseleave", () => {
    li.style.color = `${getRGB()}`;
  });
});
