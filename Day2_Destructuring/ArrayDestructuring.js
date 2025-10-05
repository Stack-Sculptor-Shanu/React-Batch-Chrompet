let myArr = [
  {
    username: "Amar",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Shivam",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Shankar",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Vishnu",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Sharmila",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Ujala",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Deepak",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Dilip",
    village: "Meerut",
    pin: "123456",
  },
  {
    username: "Shubham",
    village: "Meerut",
    pin: "123456",
  },
];
console.log(myArr.length);

let arr = ["Amar", "Geeta", ["Mango", "Papaya", "Grapes"]];
// console.log(arr[2]);
// console.log(arr[0]);
// console.log(arr[1]);

let [, person2, [fruit1]] = arr;
console.log(fruit1);
