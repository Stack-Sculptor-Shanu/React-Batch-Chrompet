import React, { useContext } from "react";
import { currencyContext } from "./GrandParent";

const Sundari = () => {
  let data = useContext(currencyContext);
  console.log(data);
  return <div>Sundari</div>;
};

export default Sundari;
