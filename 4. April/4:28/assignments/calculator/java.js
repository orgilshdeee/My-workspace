let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");

// functions

function increment() {
  let int1 = parseInt(inp1.value);
  let int2 = parseInt(inp2.value);
  let result = int1 + int2;
  document.getElementById("result").innerHTML = result
}

function decrement(){
  let int1 = parseInt(inp1.value);
  let int2 = parseInt(inp2.value);
  let result = int1 - int2;
  document.getElementById("result").innerHTML = result
}

function power(){
  let int1 = parseInt(inp1.value);
  let int2 = parseInt(inp2.value);
  let result = int1 ** int2;
  document.getElementById("result").innerHTML = result
}

function multiply(){
  let int1 = parseInt(inp1.value);
  let int2 = parseInt(inp2.value);
  let result = int1 * int2;
  document.getElementById("result").innerHTML = result
}

function divide(){
  let int1 = parseInt(inp1.value);
  let int2 = parseInt(inp2.value);
  let result = int1 / int2;
  document.getElementById("result").innerHTML = result
}

function concate(){
  let int1 = inp1.value;
  let int2 = inp2.value;
  let result = int1 + int2;
  document.getElementById("result").innerHTML = result
}