// 1. Create an array to hold quiz questions and answers
const questions = [
  {
    quest: "How many planets are in the Solar System?",
    answer: "8",
  },
  {
    quest: "How many continents are there?",
    answer: "7",
  },
  {
    quest: "How many legs does an insect have?",
    answer: "6",
  },
  {
    quest: "What year was JavaScript created?",
    answer: "1995",
  },
];

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

let response = [];
for (let i = 0; i < questions.length; i++) {
  let question = questions[i].quest;
  let answer = questions[i].answer;
  response[i] = prompt(question);

  if (response[i] === answer) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]} <br>your answer:${response[i]}  correct answer:${questions[i].answer}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(correct)}</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(incorrect)}</ol>
`;

document.querySelector("main").innerHTML = html;
