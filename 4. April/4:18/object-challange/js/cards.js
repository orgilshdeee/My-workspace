const createFood = (arr, container) => {
  let html = document.querySelector(container);
  arr.map((item) => {
    if (item.sale > 0) {
      let food = `
        <div class = "cardInfo col-3 p-3">
          <img src="${item.photo}" class="w-100">
          <h3>${item.name}</h3>
          <div class="d-flex justify-content-between">
            <p>${item.price - (item.price * item.sale) / 100}₮</p>
            <p>${item.sale}%</p>
          <div> 
        </div>`;
      html.innerHTML += food;
    } else {
      let food = `
        <div class = "cardInfo col-3 p-3">
          <img src="${item.photo}" class="w-100">
          <h3>${item.name}</h3>
          <div class="d-flex justify-content-between">
            <p>${item.price}₮</p>
          <div> 
        </div>`;
      html.innerHTML += food;
    }
  });
};

const xhrFood = new XMLHttpRequest();
xhrFood.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const datas = JSON.parse(this.responseText);

    const onSaleArr = datas.filter((food) => food.sale > 0);
    const desertArr = datas.filter((food) => food.type == "desert");
    const sideDishArr = datas.filter((food) => food.type == "sideDish");
    const mainDishArr = datas.filter((food) => food.type == "mainDish");

    createFood(onSaleArr, "#cardsOnSale");
    createFood(desertArr, "#cardsDesert");
    createFood(sideDishArr, "#cardsSideDish");
    createFood(mainDishArr, "#cardsMainDish");
  }
};

xhrFood.open("GET", "/js/data.json", true);
xhrFood.send();

// for (i = 0; i < foods.length; i++) {
//   if (foods[i].type == "desert") {
//     desert += `
//       <div class = "cardInfo col-3 p-3">
//         <img src="${foods[i].photo}" class="w-100">
//         <h3>${foods[i].name}</h3>
//         <p>${foods[i].price}</p>
//       </div>
//   `;
//   } else if (foods[i].type == "mainDish") {
//     mainDish += `
//     <div class = "cardInfo col-3 p-3">
//       <img src="${foods[i].photo}" class="w-100">
//       <h3>${foods[i].name}</h3>
//       <p>${foods[i].price}</p>
//     </div>
//   `;
//   } else if (foods[i].type == "sideDish") {
//     sideDish += `

//     <div class = "cardInfo col-3 p-3">
//       <img src="${foods[i].photo}" class="w-100">
//       <h3>${foods[i].name}</h3>
//       <p>${foods[i].price}</p>
//     </div>
//   `;
//   } else if (foods[i].type == "onSale") {
//     onSale += `
//     <div class = "cardInfo col-3 p-3">
//       <img src="${foods[i].photo}" class="w-100">
//       <h3>${foods[i].name}</h3>
//       <p>${foods[i].price}</p>
//     </div>
//   `;
//   }
// }
// document.querySelector("#cardsOnSale").innerHTML = onSale;
// document.querySelector("#cardsDesert").innerHTML += desert;
// document.querySelector("#cardsSideDish").innerHTML += sideDish;
// document.querySelector("#cardsMainDish").innerHTML += mainDish;
