import React, { useRef, useState } from "react";

const UseRef = () => {
  let [state, setState] = useState(0);
  let myName = useRef(0);
  console.log(myName);

  function handleClick() {
    console.log(myName.current);
    setState(state + 1);
    return (myName.current = myName.current + 1);
  }
  return (
    <div>
      <h1>{myName.current}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default UseRef;
