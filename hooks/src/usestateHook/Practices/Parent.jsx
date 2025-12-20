import React, { useState } from "react";
import SendData from "./SendData";

const Parent = () => {
  let [name, setName] = useState("");
  console.log("Shanu is a good person!");
  return (
    <div>
      <SendData data={name} setName={setName} />
    </div>
  );
};

export default Parent;
