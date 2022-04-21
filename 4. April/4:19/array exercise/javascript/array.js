// 1

const myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
function myAlphabetFunction(array) {
  if (array.length > 4) {
    return `myAlphabet's length is greather than 4. ${array.length}`;
  } else {
    return `myAlphabet's length isn't greather than 4. ${array.length}`;
  }
}
console.log(myAlphabetFunction(myAlphabet));

// 2

const Planets = ["planet0", "planet1", "planet2", "planet3", "planet4"];
for (i = 0; i < Planets.length; i++) {
  console.log(`planet's index ${i} is ${Planets[i]}.`);
}

// 3

const wowDataTypes = ["string", 4, 3.14, "X", true];
for (j = 0; j < wowDataTypes.length; j++) {
  console.log(`wowDataType: index[${j}]'s typeOf is ${typeof wowDataTypes[j]}`);
}

// 4

let student1Cources = ["Математик", "Англи хэл", "Програмчлал"];
let student2Cources = ["Газар зүй", "Испани", "Програмчлал"];

function getSameElement(a, b) {
  for (h = 0; h < a.length; h++) {
    for (k = 0; k < b.length; k++) {
      if (a[h] == b[k]) {
        return console.log(`both arrays have same index of "${a[h]}"`);
      }
    }
  }
}
getSameElement(student1Cources, student2Cources);
