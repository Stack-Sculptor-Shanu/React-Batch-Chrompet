import { Parent } from "./components/Parent";
function App() {
  let myName = "Tonny Stark";
  //   let isLoggedIn = Symbol;

  let arrOfFruits = ["Avocado", "Orange", "Pear", "Guava"];

  let user = {
    username: "Vijay Thalapathy",
    profession: "Actor",
    age: 50,
  };

  //   console.log(typeof Symbol);
  return (
    <div>
      {/* <h1>I am App Component</h1>
      <h1>{myName}</h1>
      <span>{myName}</span> */}
      {/* <h1>{isLoggedIn}</h1> */}
      {/* <h1>{user.username}</h1> */}

      <Parent data={myName} fruits={arrOfFruits} />
      <Parent obj={user} />
    </div>
  );
}
export default App;
