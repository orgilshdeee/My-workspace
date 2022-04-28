let order = true;
const breakFastPromises = new Promise((resolve, reject) => {
  if (order) {
    resolve(`Your order is ready, come and get it!`);
  } else {
    reject(`Oh!, sorry for that`);
  }
});

console.log(breakFastPromises);

breakFastPromises
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
