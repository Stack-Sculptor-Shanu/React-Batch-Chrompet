import React from "react";
import Parent from "./components/memo/Parent";
import ParentMemo from "./components/useMemo/ParentMemo";

const App = () => {
  return (
    <div>
      {/*//! React Memo Concept  */}
      {/* <Parent /> */}

      {/*//! UseMemo Concept  */}
      <ParentMemo />
    </div>
  );
};

export default App;
