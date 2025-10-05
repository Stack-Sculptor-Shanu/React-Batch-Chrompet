import PropTypes from "prop-types";
import React from "react";

export const Child = ({ data, myData }) => {
  console.log(data);
  console.log(myData);
  return (
    <div>
      Child
      <h1>{data}</h1>
      <h3>{myData}</h3>
    </div>
  );
};

Child.propTypes = {
  data: PropTypes.number.isRequired,
  myData: PropTypes.string,
};
