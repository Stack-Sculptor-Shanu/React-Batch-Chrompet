import ChildComponent from "./ChildComponent";

const Parent = ({ data, currency }) => {
  console.log(data, "from Parent Component");
  data = "Shanu";
  console.log(currency, "From Parent");
  currency = 5000;
  return (
    <div>
      <ChildComponent data={data} currency={currency} />
    </div>
  );
};

export default Parent;
