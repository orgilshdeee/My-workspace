// const btnMain = document.querySelector("#btn-main");

// const headTitle = document.querySelector("#headline");

// btnMain.addEventListener("click", () => {
//   const text = input.value;
//   headTitle.className = "grow";
//   headTitle.textContent = text;

//   input.value = "";
// });

const listContainerbtn = document.querySelector(".btn-toggle");
const listHide = document.querySelector(".list-container");
listContainerbtn.addEventListener("click", () => {
  if (listHide.style.display == "none") {
    listHide.style.display = "block";
  } else if ((listHide.style.display = "block")) {
    listHide.style.display = "none";
  }
});

const btnRemove = document.querySelector(".btn-remove");
// const lastChild = document.querySelector("li:last-child");
btnRemove.addEventListener("click", () => {
  lists.lastChild.remove();
});

const addList = document.querySelector("#btn-main");
// const lists = document.querySelector("ul");
const input = document.querySelector(".input-main");

addList.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = input.value;
  attachElement(item);
  lists.prepend(item);
  input.value = "";
});

const tasklist = document.getElementsByTagName("li");
const lists = document.querySelector("ul");
const arr = [...tasklist];

const attachElement = (event) => {
  const addbtn = document.createElement("button");
  addbtn.textContent = "Remove";
  addbtn.className = "remove";
  event.appendChild(addbtn);
  addbtn.addEventListener("click", () => {
    event.remove();
  });
};
for (let event of tasklist) {
  attachElement(event);
}
