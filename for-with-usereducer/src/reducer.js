export function reducer(state, action) {
  //   console.log(state);
  //   console.log(action);
  console.log(state);

  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };
    case "setage":
      return { ...state, age: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };

    case "onSubmit":
      return { ...state, submitted: true };

    default:
      break;
  }
}

export const initialValues = {
  username: "",
  age: "",
  email: "",
  submitted: false,
};
