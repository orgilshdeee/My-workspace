const playlist = [
  ["So What", "singer"],
  ["Respect", "singerr"],
  ["What a Wonderful World", "singerrr"],
  "At Last",
  "Three Little Birds",
  "The Way You Look Tonight",
];

function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    let songs = "";
    for (let j = 0; j < arr[i].length; j++) {
      songs += `<span>${arr[i][j]}</span>`;
    }
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

document.querySelector("main").innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;
