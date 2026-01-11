import React, { useMemo, useState } from "react";
import ChildMemo from "./ChildMemo";

const ParentMemo = () => {
  let [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  };

  let arr = useMemo(() => {
    return ["mango", "apple"];
  }, []);
  let [fruitArr, setFruitArr] = useState(arr);
  //   console.log(fruitArr);

  function changeFruit() {
    setFruitArr((fruitArr = "Guava"));
  }

  console.log("I am parent Memo");
  return (
    <div>
      <h1>{count} from Parent Memo</h1>
      <button onClick={handleClick}>Increment</button>
      <h1>{fruitArr[0]}</h1>
      <button onClick={changeFruit}>Change Fruit Name</button>
      <ChildMemo fruit={arr} />
    </div>
  );
};

export default ParentMemo;
