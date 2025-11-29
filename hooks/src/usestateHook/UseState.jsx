import React from "react";
import { useState } from "react";

// console.log(useState);

let myInitialValue = 0;
const UseState = () => {
  //   let data = useState(myInitialValue);
  //   console.log(data);
  let [initialValue, setInitialValue] = useState(myInitialValue);
  //   console.log(initialValue);
  //   console.log(setInitialValue);

  function handleIncrement() {
    //! It will not work expected so we need to go with another way as follows
    // setInitialValue(initialValue + 1);
    // setInitialValue(initialValue + 1);

    setInitialValue((prevVal) => {
      console.log("First value" + prevVal);
      return prevVal + 1;
    });
    setInitialValue((prevVal) => {
      console.log("Second value:" + prevVal);
      return prevVal + 1;
    });
  }

  console.log(`My count value is: ${initialValue}`);

  function decrement() {
    setInitialValue(initialValue - 1);
  }
  return (
    <div>
      <h1>{initialValue}</h1>
      <button onClick={handleIncrement}>Increase the value</button>
      <button onClick={decrement}>Decrease the value by 1</button>
      <button onClick={() => setInitialValue(0)}>reset</button>
    </div>
  );
};

export default UseState;
