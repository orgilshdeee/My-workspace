let foods = [
  {
    name: "Зайрмаг",
    type: "desert",
    price: "4,760₮",
    photo: `img/onSaleImg/icecream.png`,
  },
  {
    name: "Панкейк",
    type: "desert",
    price: "4,800₮",
    photo: `img/onSaleImg/pancake.png`,
  },
  {
    name: "Панкейк",
    type: "desert",
    price: "4,800₮",
    photo: `img/onSaleImg/pancake.png`,
  },
  {
    name: "Панкейк",
    type: "desert",
    price: "4,800₮",
    photo: `img/onSaleImg/pancake.png`,
  },
  {
    name: "Салмон загас",
    type: "mainDish",
    price: "11,800₮",
    photo: `img/mainDishImg/Salmon.png`,
  },
  {
    name: "Бөөрөнхий мах",
    type: "mainDish",
    price: "11,800₮",
    photo: `img/mainDishImg/meatball.png`,
  },
  {
    name: "Бөөрөнхий мах",
    type: "mainDish",
    price: "11,800₮",
    photo: `img/mainDishImg/meatball.png`,
  },
  {
    name: "Бөөрөнхий мах",
    type: "mainDish",
    price: "11,800₮",
    photo: `img/mainDishImg/meatball.png`,
  },
  {
    name: "Детокс салад",
    type: "sideDish",
    price: "6,800₮",
    photo: `img/sideDishImg/detoxSalad.png`,
  },
  {
    name: "Кобб салад",
    type: "sideDish",
    price: "6,800₮",
    photo: `img/sideDishImg/kobbSalad.png`,
  },
  {
    name: "Кобб салад",
    type: "sideDish",
    price: "6,800₮",
    photo: `img/sideDishImg/kobbSalad.png`,
  },
  {
    name: "Кобб салад",
    type: "sideDish",
    price: "6,800₮",
    photo: `img/sideDishImg/kobbSalad.png`,
  },
  {
    name: "Өглөөний хоол",
    type: "onSale",
    price: "6,800₮",
    photo: `img/onSaleImg/breakfast.png`,
  },
  {
    name: "Банана сендвич",
    type: "onSale",
    price: "6,800₮",
    photo: `img/onSaleImg/bananaSandwich.png`,
  },
  {
    name: "Банана сендвич",
    type: "onSale",
    price: "6,800₮",
    photo: `img/onSaleImg/bananaSandwich.png`,
  },
  {
    name: "Банана сендвич",
    type: "onSale",
    price: "6,800₮",
    photo: `img/onSaleImg/bananaSandwich.png`,
  },
];

let onSale = ``;
let desert = ``;
let sideDish = ``;
let mainDish = ``;

for (i = 0; i < foods.length; i++) {
  if (foods[i].type == "desert") {
    desert += ` 
      <div class = "cardInfo col-3 p-3">
        <img src="${foods[i].photo}" class="w-100">
        <h3>${foods[i].name}</h3>
        <p>${foods[i].price}</p>
      </div>
  `;
  } else if (foods[i].type == "mainDish") {
    mainDish += `
    <div class = "cardInfo col-3 p-3">
      <img src="${foods[i].photo}" class="w-100">
      <h3>${foods[i].name}</h3>
      <p>${foods[i].price}</p>
    </div>
  `;
  } else if (foods[i].type == "sideDish") {
    sideDish += `
    
    <div class = "cardInfo col-3 p-3">
      <img src="${foods[i].photo}" class="w-100">
      <h3>${foods[i].name}</h3>
      <p>${foods[i].price}</p>
    </div>
  `;
  } else if (foods[i].type == "onSale") {
    onSale += `
    <div class = "cardInfo col-3 p-3">
      <img src="${foods[i].photo}" class="w-100">
      <h3>${foods[i].name}</h3>
      <p>${foods[i].price}</p>
    </div>
  `;
  }
}
document.querySelector("#cardsOnSale").innerHTML = onSale;
document.querySelector("#cardsDesert").innerHTML += desert;
document.querySelector("#cardsSideDish").innerHTML += sideDish;
document.querySelector("#cardsMainDish").innerHTML += mainDish;
