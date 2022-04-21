// while (true) {
//   const answer = prompt("Which planet is closest to the sun?");
//   if (answer == "Mercury") {
//     alert("That's Correct!!");
//     break;
//   } else {
//     alert("That's wrong answer!!");
//   }
// }

// const a = 10;
// const b = 20;
// const c = 30;
// if (a > b) {
//   console.log("A is greater than B");
// } else {
//   console.log("A is not greater than B");
// }

// let correctGuess = false;
// const number = 6;
// const guess = prompt("Guess a number between 1 and 10.");

// if (+guess === number) {
//   correctGuess = true;
// } else if (+guess < number) {
//   const guessMore = prompt(`Try again. The number is higher than ${guess}`);
//   if (+guessMore === number) {
//     correctGuess = true;
//   }
// } else if (+guess > number) {
//   const guessLess = prompt(`Try again. The number is lower than ${guess}`);
//   if (+guessLess === number) {
//     correctGuess = true;
//   }
// }

// if (correctGuess) {
//   console.log("You guessed the number!");
// } else {
//   console.log(`Sorry. The number was ${number}.`);
// }

// while (true) {
//   let randomNumber = Math.floor(Math.random() * 10 + 1);
//   while (true) {
//     const numberInput = prompt("Enter number between 1 to 10:");
//     if (randomNumber == numberInput) {
//       alert("You Found It");
//       break;
//     } else if (randomNumber > numberInput) {
//       alert("More higher");
//     } else if (randumNumber == "end") {
//       break;
//     } else {
//       alert("More less");
//     }
//     console.log(`Number was ${randomNumber}`);
//   }
// }
