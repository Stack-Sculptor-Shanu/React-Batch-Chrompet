import Child from "./Child";
import ParentObject from "./ParentObject";

const App = () => {
  //   let userObj = {
  //     userName: "Virat",
  //     age: 36,
  //     profession: "Cricket Player",
  //   };
  return (
    <div>
      {/* <h1>I am App Component</h1> */}
      {/* <Child name="Shanu" age={21} />
      <hr />
      <Child /> */}

      <ParentObject />
    </div>
  );
};

export default App;
