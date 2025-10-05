function sum(...args) {
  //! Rest Parameter
  console.log(args);
}

sum(8, 10, 9, 5, 6, 7, 7);

let arr = [6, 8, 9];
let arr2 = ["Mango", "India"];
let mergedarr = [...arr, ...arr2];
console.log(mergedarr);
console.log(mergedarr.length);

let obj = {
  username: "Shanu",
  age: 20,
  country: "india",
};
function spreadedObj(a) {
  console.log(a);
}
spreadedObj(...obj);
