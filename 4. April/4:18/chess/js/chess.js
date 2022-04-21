// let row = "";
// let col2 = "";
// let col1 = "";
// for (i = 0; i < 8; i++) {
//   if (i % 2 == 1) {
//     col1 += `<td style="background-color: black"></td>`;
//   } else {
//     col1 += `<td></td>`;
//   }
// }
// for (i = 0; i < 8; i++) {
//   if (i % 2 == 0) {
//     col2 += `<td style="background-color: black"></td>`;
//   } else {
//     col2 += `<td></td>`;
//   }
// }
// for (i = 0; i < 8; i++) {
//   if (i % 2 == 0) {
//     row += `<tr>${col2}</tr>`;
//   } else {
//     row += `<tr>${col1}</tr>`
//   }
// }
// console.log(row);

// document.querySelector("table").innerHTML = row;

// let chess = [];

// let tbody = document.querySelector("tbody");
// for (i = 0; i < 8; i++) {
//   let tr = "<tr>";
//   for (j = 0; j < 8; j++) {
//     if (j % 2 && i % 2) {
//       tr += `<td style="background-color:black"></td>`;
//     } else if (i % 2 != 1 && j % 2 != 1) {
//       tr += `<td style="background-color:black"></td>`;
//     } else {
//       tr += `<td style="background-color:white"></td>`;
//     }
//   }
//   tr += "</tr>";
//   tbody.innerHTML += tr;
// }

let tbody = document.querySelector("tbody");
for (i = 0; i < 8; i++) {
  let tr = "<tr>";
  for (j = 0; j < 8; j++) {
    tr += `<td></td>`;
  }
  tr += "</tr>";
  tbody.innerHTML += tr;
}
