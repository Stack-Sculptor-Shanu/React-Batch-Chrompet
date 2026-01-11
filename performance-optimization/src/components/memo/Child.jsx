import React from "react";
const Child = ({ count }) => {
  console.log("I am Child Component");
  return (
    <div>
      <h1>{count} from Child Component</h1>
    </div>
  );
};

export default React.memo(Child);
