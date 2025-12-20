const SendData = (props) => {
  console.log(props);
  let handleClick = () => {
    props.setName("Shanu");
  };
  return (
    <div>
      <h1>{props.data}</h1>
      <button onClick={handleClick}>Add Name</button>
    </div>
  );
};

export default SendData;
