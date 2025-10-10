import React from "react";
import { Child } from "./Child";

const App = () => {
  let data = "90"
  let myData = 87
  return (
    <div>
      {/* <Child data={"29"} />
      <Child myData={"Shanu"} /> */}
      <Child data = {data} />
      <Child data = {myData} />
    </div>
  );
};

export default App;
