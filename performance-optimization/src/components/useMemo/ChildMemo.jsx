import React from "react";

const ChildMemo = (props) => {
  console.log(props);
  console.log("I am Child Memo");
  return (
    <div>
      <h1>Child Memo Here</h1>
    </div>
  );
};

// export default React.memo(ChildMemo);
export default React.memo(ChildMemo);
