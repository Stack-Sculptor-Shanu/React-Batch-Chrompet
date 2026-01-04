import React from "react";
import GrandParent from "./Components/GrandParent";
import ChildComponent from "./Components/ChildComponent";
import Sundari from "./Components/Sundari";

const App = () => {
  return (
    <div>
      <GrandParent>
        <ChildComponent />
        <Sundari />
      </GrandParent>
    </div>
  );
};

export default App;
