// let a = 8;
// let b = "9";
// console.log(typeof b); //string
// console.log(a / b);

// let c = null;
// let ud = undefined;
// console.log(typeof c);

//! Pre-requisites of React
//? Functions
//todo Higher order functions
//todo Callback Function
//todo named functions

let sum = function sum(a) {
  //   console.log("We are starting with react");
  //   return a + b;
  console.log(a);
  console.log(a());
  return "Hello";
};

function result() {
  let a = 8;
  let b = 9;
  return "Hello I am result";
}
console.log(sum(result));
//? Array methods
//! forEach loop
let myArr = [1, 2, 3, 45, 67, 89];
let myData = myArr.forEach(function name(e) {
  return e;
});
console.log("mydata" + myData);
//! Filter
let filteredData = myArr.filter(function (e) {
  if (e > 40) {
    return e;
  }
});
console.log(filteredData);
//! map
let myArrayValue = myArr.map(function myname(item) {
  if (item > 40) {
    return item;
  }
});
console.log(myArrayValue);
//! reduce
//! for in and for of
let arr = ["papaya", "orange", "grapes", "plum"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let obj = {
//   username: "abc",
//   age: 21,
//   city: "Chennai",
// };
// for (let i in obj) {
//   console.log(obj[i]);
// }

//! Modules

// logics = "He is a good person";
// console.log(logics);

let logics = "shanu";
console.log(logics);

let str = "racecars"; //sracecar
// let splitChar = str.split("");
// console.log(splitChar);
// let reversedChar = splitChar.reverse();
// console.log(reversedChar);
// let palindrome = reversedChar.join("");
// console.log(palindrome);

let myResult = str.split("").reverse().join("");
console.log(myResult);

//! Reduce array method
let arra = [1, 2];
let myVal = arra.reduce((acc, currVal) => {
  return (acc += currVal);
}, 0);
console.log(myVal);
