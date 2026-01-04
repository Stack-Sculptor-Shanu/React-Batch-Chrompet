import React from "react";
import { currencyContext } from "./GrandParent";
import { useContext } from "react";

const ChildComponent = () => {
  let data = useContext(currencyContext);
  console.log(data);
  return <div></div>;
};

export default ChildComponent;
