// const getName = prompt("Таны нэр:");
// const date = new Date();
// const getTime = date.getHours();
// let output;
// if (getTime >= 6 && getTime < 12) {
//   output = "Өглөөний мэнд!";
// } else if (getTime >= 12 && getTime < 18) {
//   output = "Өдрийн мэнд!";
// } else {
//   output = "Оройн мэнд!";
// }

// document.querySelector("main").innerHTML = `<p>${output} ${getName}.</p>`;

// function generateNum(getNum) {
//   const retNum = Math.floor(Math.random() * getNum) + 1;
//   return retNum;
// }

// console.log(generateNum(6));
// console.log(generateNum(10));
// console.log(generateNum(100));
const getNum1 = prompt("enter random number");
const getNum2 = prompt("enter random number");

console.log(getMax(getNum1, getNum2));

function getMax(int1, int2) {
  return Math.max(int1, int2);
}
