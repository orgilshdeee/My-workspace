// Collect input from a user

const var1 = prompt("Enter a lowest number for generator:");
const var2 = prompt("Enter a highest number for generator:");

// Convert the input to a number

// Use Math.random() and the user's number to generate a random number
// Create a message displaying the random number

if (var1 < var2) {
  let randomNumGen =
    Math.floor(Math.random() * parseInt(var2 - var1 + 1)) + parseInt(var1);

  const main = document.querySelector("main");

  main.innerHTML = `<p>Random number has been generated from ${var1}-${var2} is ${randomNumGen}</p>`;
} else {
  let randomNumGen =
    Math.floor(Math.random() * parseInt(var1 - var2 + 1)) + parseInt(var2);

  const main = document.querySelector("main");

  main.innerHTML = `<p>Random number has been generated from ${var2}-${var1} is ${randomNumGen}</p>`;
}
