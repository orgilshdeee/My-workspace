// 1. Create a multidimensional array to hold quiz questions and answers

const QnA = [
  [
    "What day is today?",
    "What month is today?",
    "What year is today?",
    "How old are you?",
  ],
  ["Friday", "April", "2022", "26"],
];
// 2. Store the number of questions answered correctly
let msg = 0;
let question = new Array();
let answer = new Array();
let getAnswer = new Array();
let html = "";
function myFunction(getArray) {
  for (i = 0; i < getArray[0].length; i++) {
    question = getArray[1][i];
    answer = prompt(getArray[0][i]);
    getAnswer[i] = answer;
    if (question == answer) {
      msg += 1;
    } else {
      // alert(`Sorry, the answer for ${getArray[0][i]} is ${question}`);
      msg += 0;
    }
  }
  return msg;
}

document.querySelector(
  "footer"
).innerHTML = `<p>Your correct answer is ${myFunction(QnA)}</p>`;

for (y = 0; y < getAnswer.length; y++) {
  if (getAnswer[y] == QnA[1][y]) {
    html += `<p>${QnA[0][y]} </br> ${getAnswer[y]} </br> </p>`;
  } else {
    html += `<p>${QnA[0][y]} </br> right answer was: ${QnA[1][y]} </br> </p>`;
  }
}
document.querySelector("main").innerHTML = html;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

// 4. Display the number of correct answers to the user
