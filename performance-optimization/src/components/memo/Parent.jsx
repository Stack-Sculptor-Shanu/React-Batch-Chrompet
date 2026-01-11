import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [count, setcount] = useState(0);
  let [name, setName] = useState("Sundari");
  const handleClick = () => {
    setcount(count + 1);
  };

  const handleName = () => {
    setName("Shanu");
  };

  console.log("I am Parent Component");
  return (
    <div>
      <h1>{count} from Parent Component</h1>
      <button onClick={handleClick}>Increment</button>

      <h1>{name}</h1>
      <button onClick={handleName}>Change Name</button>
      <Child count={count} />
    </div>
  );
};

export default Parent;
