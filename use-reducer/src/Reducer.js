export function reducer(state, action) {
  //   console.log(state);
  //   console.log(action);

  switch (action.type) {
    case "incre":
      return (state = state + 1);

    case "decre":
      return (state = state - 1);
    case "reset":
      return (state = 0);
  }
}

export let initialstate = 0;
