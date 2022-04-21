// const title = "Mstars academy class 3";
// const answer = "What's your\
//  name";

// console.log(title.length);
// console.log(title.toUpperCase());

// const getName = prompt("Input name");
// const getRole = prompt("Input role");
// console.log(getName + ": " + getRole.toUpperCase());
// const message = `Hello my name is ${getName}. ${getName} isn't my real name tho.`;
// console.log(message);

// document.querySelector("main").innerHTML = `<h1>${message}</h1>`;

const q1 = prompt("What year is it?");
const q2 = prompt("What month is it?");
const q3 = prompt("What day is it today?");
let date = new Date();
let day = date.getDay();
const result = `Today is ${q1}, ${q3} of ${q2}.`;

if (day == 0) {
  day = "Sunday";
} else if (day == 1) {
  day = "Monday";
} else if (day == 2) {
  day = "Tuesday";
} else if (day == 3) {
  day = "Wednesday";
} else if (day == 4) {
  day = "Thursday";
} else if (day == 5) {
  day = "Friday";
} else if (day == 6) {
  day = "Saturday";
}
console.log;
document.querySelector(
  "main"
).innerHTML = `<p>${result} and today is ${day}</p>`;
