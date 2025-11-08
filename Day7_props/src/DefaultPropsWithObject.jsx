import React from "react";

const DefaultPropsWithObject = ({ carData = {}, user = {} }) => {
  //   console.log(props);
  let {
    Brand_Name = "BMW",
    variant = "M5",
    Engine = "TurboCharge v12",
  } = carData;

  let { userName = "NA", profession = "NA", age = "NA" } = user;
  return (
    <div>
      <h1>Car details</h1>
      <h3>Brand Name: {Brand_Name}</h3>
      <h3>Variant: {variant}</h3>
      <h3>Engine: {Engine}</h3>
      <hr />
      <h1>User Details</h1>
      <h3>user name: {userName}</h3>
    </div>
  );
};

export default DefaultPropsWithObject;
