const Child = ({ name = "Not Applicable", age = "Not Applicable" }) => {
  //   console.log(props.data);
  //   console.log(data);
  return (
    <div>
      <h1>I am Child Component</h1>
      {/* {data.map((ele, index) => console.log(ele))} */}
      {/* 
      <h2>{data.userName}</h2>
      <h2>{data.age}</h2>
      <h2>{data.profession}</h2> */}

      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
};
export default Child;
