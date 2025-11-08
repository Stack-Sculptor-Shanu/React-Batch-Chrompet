import Parent from "./components/Parent";
import Child from "./components/Child";
const App = () => {
  let myName = "Shanu";
  let myAge = 10;
  let maritalStatus = true;
  let job = null;
  let knowledge = undefined;
  return (
    <div>
      <h1>I am app Component</h1>
      <h2>My name is {myName}</h2>
      <p>I am {myAge} years old</p>
      <p>I am married to {maritalStatus}</p>
      <p>I am working in {job}</p>
      <p>I know all these things {knowledge}</p>
      <Parent />
      <Child />
    </div>
  );
};
export default App;
