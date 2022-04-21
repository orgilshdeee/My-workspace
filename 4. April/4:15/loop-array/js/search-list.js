const inStock = [
  "pizza",
  "cookies",
  "eggs",
  "apples",
  "milk",
  "cheese",
  "bread",
  "lettuce",
  "carrots",
  "broccoli",
  "potatoes",
  "crackers",
  "onions",
  "tofu",
  "limes",
  "cucumbers",
];

const search = prompt("Search for a product.");

let message;
if (inStock.includes(search) == true) {
  message = `inStock does include a "${search}"`;
} else if (search == null) {
  message = `${inStock.join(", ")}`;
} else {
  message = `inStock doesn't include a "${search}"`;
}

document.querySelector("main").innerHTML = `<p>${message}</p>`;
