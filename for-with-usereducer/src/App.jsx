import React, { useReducer } from "react";
import "./index.css";
import { initialValues, reducer } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "onSubmit" });
  };
  return (
    <div className="bg-blue-200 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="h-1/2 bg-blue-300 w-1/4 flex items-center justify-center flex-col gap-4 rounded-bl-4xl rounded-tr-4xl"
      >
        <h1 className="text-blue-950 font-bold text-4xl mt-[-50px] mb-7">
          Login Here
        </h1>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: "setUsername", payload: e.target.value })
          }
          className="w-80 p-2 border-b-2 outline-0 text-blue-900 font-bold border-b-blue-950"
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "setEmail", payload: e.target.value })
          }
          className="w-80 p-2 border-b-2 outline-0 text-blue-900 font-bold border-b-blue-950"
        />
        <input
          type="number"
          placeholder="Enter age"
          name="age"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "setage", payload: e.target.value })
          }
          className="w-80 p-2 border-b-2 outline-0 text-blue-900 font-bold border-b-blue-950"
        />

        <button
          type="submit"
          className="w-80 p-2 border-2 outline-0 text-blue-900 font-bold border-blue-950 hover:bg-blue-950 ease-in duration-500 rounded-tl-2xl rounded-br-2xl hover:text-blue-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
