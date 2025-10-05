let obj = {
  username: "Shubham",
  village: "Meerut",
  pin: "123456",
  skills: ["C++", "JavaScript", "CyberSecurity"],
};
let {
  username,
  village,
  pin,
  skills: [firstkill, secondskill, thirdskill],
} = obj;
console.log(username);
console.log(firstkill);
