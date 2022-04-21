const a = 10;
const b = 15;

const getm2 = (a, b) => a * b;
console.log(getm2(a, b));

const weight = prompt("Enter weight");
const height = prompt("Enter height");

const calcBMI = (weight, height) => {
  const bmi = weight / ((height / 100) ^ 2);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    return "Normal weight";
  } else if (25 <= bmi && bmi <= 29.9) {
    return "Pre-obesity";
  } else if (30 <= bmi && bmi <= 34.9) {
    return "Obesity class 1";
  } else if (35 <= bmi && bmi <= 39.9) {
    return "Obesity class 2";
  } else if (bmi >= 40) {
    return "Obesity class 3";
  }
};
console.log(calcBMI(weight, height));
