import { useReducer } from "react";
import { initialstate, reducer } from "./Reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "incre" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decre" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default App;
