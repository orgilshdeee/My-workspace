// function add(a, b) {
//   const c = a + b;
//   return c;
// }
// function subtract(a, b) {
//   const c = a - b;
//   return c;
// }
// function divide(a, b) {
//   const c = a / b;
// }
// function multiple(a, b) {
//   const c = a * b;
//   return c;
// }

// function generateNum() {
//   const a = Math.floor(Math.number() * 100) + 1;
//   const b = Math.floor(Math.number() * 100) + 1;
//   return console.log(`${Math.max(a, b)} is higher than ${Math.min(a, b)}`);
// }

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;
// const gen2num = (a, b) => {
//   const c =
//     Math.floor(Math.random(Math.max(a, b) - Math.min(a, b)) + 1) +
//     Math.min(a, b);
//   return console.log(`${Math.max(a, b)} is higher than ${Math.min(a, b)}`);
// };

// const CtoF = (c, f = "F°") => (c * 9) / 5 + 32 + f;
// console.log(CtoF(30));

// let answer;
// while (answer !== "correct") {
//   answer = prompt("enter answer");
//   console.log(answer);
// }

let arrays = [];
for (i = 0; i < 5; i++) {
  arrays[i] = prompt("Enter something");
}

for (y = 0; y < 5; y++) {
  console.log(arrays[y]);
}
