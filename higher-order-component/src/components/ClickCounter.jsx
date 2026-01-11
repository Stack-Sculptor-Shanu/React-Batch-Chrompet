import UpdatedCount from "../higherOrderComponent/higherOrderComponetn";

const ClickCounter = ({ count, updaterFunction }) => {
  return (
    <div>
      <h1>{count} from Click Counter component</h1>
      <button onClick={updaterFunction}>Increment</button>
    </div>
  );
};

export default UpdatedCount(ClickCounter);
