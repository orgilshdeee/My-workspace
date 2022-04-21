/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

// 2. Store the rank of a player

// let result = 0;

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

// const q1 = prompt("1+2 = ?");
// if (q1 == 3 || q2 == 5 || q3 == 7 || q4 == 9 || q5 == 11) {
//   result += 1;
// } else {
//   result += 0;
// }
// const q2 = prompt("2+3 = ?");
// if (q1 == 3 || q2 == 5 || q3 == 7 || q4 == 9 || q5 == 11) {
//   result += 1;
// } else {
//   result += 0;
// }
// const q3 = prompt("3+4 = ?");
// if (q1 == 3 || q2 == 5 || q3 == 7 || q4 == 9 || q5 == 11) {
//   result += 1;
// } else {
//   result += 0;
// }
// const q4 = prompt("4+5 = ?");
// if (q1 == 3 || q2 == 5 || q3 == 7 || q4 == 9 || q5 == 11) {
//   result += 1;
// } else {
//   result += 0;
// }
// const q5 = prompt("5+6 = ?");
// if (q1 == 3 || q2 == 5 || q3 == 7 || q4 == 9 || q5 == 11) {
//   result += 1;
// } else {
//   result += 0;
// }

/*

  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
// let output;
// if (result == 0) {
//   output = "No crown";
// } else if (result == 1 || result == 2) {
//   output = "Bronze";
// } else if (result == 3 || result == 4) {
//   output = "Silver";
// } else {
//   output = "Gold";
// }
// 6. Output results to the <main> element

// document.querySelector("main").innerHTML = `<p>Your rank is ${output}</p>`;

// const secPerMin = 60;
// const minPerHour = 60;
// const hourPerDay = 24;
// const daysPerYear = 365;
// let date = new Date();
// let age = date.getFullYear() - 1996;
// let lifetimeBySec = age * daysPerYear * hourPerDay * minPerHour * secPerMin;

// const main = document.querySelector("main");
// main.innerHTML = `<p>I've been alive for ${lifetimeBySec} seconds</p>
// <p>${lifetimeBySec / 60} minutes </p>
// <p>${lifetimeBySec / 60 / 60} hours </p>
// <p>${lifetimeBySec / 60 / 60 / 24} days </p>
// <p>${lifetimeBySec / 60 / 60 / 24 / 365} years </p>`;

// console.log(age);
