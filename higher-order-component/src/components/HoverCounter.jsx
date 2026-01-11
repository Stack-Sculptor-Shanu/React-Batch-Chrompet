import UpdatedCount from "../higherOrderComponent/higherOrderComponetn";

const HoverCounter = ({ count, updaterFunction }) => {
  return (
    <div>
      <h1 onMouseOver={updaterFunction}>{count} from HoverCounter Component</h1>
    </div>
  );
};

export default UpdatedCount(HoverCounter);
