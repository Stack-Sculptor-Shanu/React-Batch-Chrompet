import React, { createContext } from "react";

//! Creating Context for Provider
export const currencyContext = createContext();
console.log(currencyContext);
let { Provider } = currencyContext;

const GrandParent = ({ children }) => {
  //! Global data which I want to share for each component
  let userData = {
    name: "Sundari",  
    age: 21,
    isMarried: null,
  };
  return (
    <div>
      <Provider value={userData}>{children}</Provider>
    </div>
  );
};

export default GrandParent;
