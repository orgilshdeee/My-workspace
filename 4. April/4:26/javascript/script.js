function doOperation(int1, func, int2) {
  return func(int1, int2);
}

function power(a, b) {
  return a ** b;
}
function increment(a, b) {
  return a + 1 * b;
}

let answer = doOperation(3, power, 4);
console.log(answer);
