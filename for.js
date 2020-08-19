const fruits = ["Apple", "Orange", "Banana"]; // the bariable fruits is = to that aray of strings
const length = fruits.length;

for (let i = 0; i < length; i++) {
  // init, condision, increment
  //body
  console.log(fruits[i]);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// for of - iterates over the values of an array
for (const fruit of fruits) {
  console.log(fruit);
}
// for in - iteratas over the keys of an object
const person = {
  firstname: "Tyson",
  lastanme: "potter",
  address: {
    lineone: "150 s 800 e",
    zip: "84545",
  },
};

for (const key in person) {
  console.log(key);
}
// when you dont need the index counter "i"
