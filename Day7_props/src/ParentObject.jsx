import React from "react";
import DefaultPropsWithObject from "./DefaultPropsWithObject";

const ParentObject = () => {
  let carDetails = {
    Brand_Name: "Dodge",
    variant: "Demon SRT",
    Engine: "V8 supercharge",
  };
  let userDetails = {
    userName: "Yusuf Pathan",
    profession: "Cricket Player",
    age: 49,
  };
  return (
    <div>
      <DefaultPropsWithObject carData={carDetails} user={userDetails} />
      <hr />
      <DefaultPropsWithObject user={userDetails} />
    </div>
  );
};

export default ParentObject;
