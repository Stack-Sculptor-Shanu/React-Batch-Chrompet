import React, { useRef, useState } from "react";
import style from "./diff.module.css";

console.log(style);

const DiffUsUr = () => {
  let [state, setState] = useState(0);

  //   console.log(state);
  //   console.log("Shanu is a good boy!!");
  let countRef = useRef(0);

  let handleSubmit = () => {
    countRef.current = countRef.current + 1;
    setState(state + 1);
    console.log(countRef.current);
  };
  return (
    <div className={style.diff}>
      <h1>{countRef.current}</h1>
      <button onClick={handleSubmit}>Increment</button>
    </div>
  );
};

export default DiffUsUr;
