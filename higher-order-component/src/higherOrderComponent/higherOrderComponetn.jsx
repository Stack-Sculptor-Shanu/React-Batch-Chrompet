import { useState } from "react";

const UpdatedCount = (OriginalComponent) => {
  const NewComponent = () => {
    let [count, setCount] = useState(0);
    let handleClick = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} updaterFunction={handleClick} />;
  };
  return NewComponent;
};
export default UpdatedCount;
