// let userName = prompt("Сайн байна уу! Таны нэр хэн бэ?");
// let sex = prompt("Хүйс?");
// let dateOfBirth = prompt("Таны төрсөн он хэд вэ?");
// const date = new Date();
// const thisYear = date.getFullYear();
// let age = thisYear - dateOfBirth;
// console.log("Өдрийн мэнд! " + userName + " Нас: " + age + " Хүйс: " + sex);
// document.write(
//   "<h1>Өдрийн мэнд! " + userName + " Нас: " + age + " Хүйс: " + sex + "</h1>"
// );

const questions = [
  prompt("1+2 = ?"),
  prompt("2+3 = ?"),
  prompt("3+4 = ?"),
  prompt("4+5 = ?"),
  prompt("5+6 = ?"),
];
let score = 0;
let rank;
for (let i = 0; i < 5; i++) {
  if (
    questions[i] === 3 ||
    questions[i] === 5 ||
    questions[i] === 7 ||
    questions[i] === 9 ||
    questions[i] === 11
  ) {
    score += 1;
  } else {
    score += 0;
  }
}

if (score == 0) {
  rank = "No crown";
} else if (score == 1 || score == 2) {
  rank = "Bronze";
} else if (score == 3 || score == 4) {
  rank = "Silver";
} else {
  rank = "Gold";
}
console.log(score);
console.log(rank);
document.querySelector("main").innerHTML = `<p>Your rank is ${rank}</p>`;
