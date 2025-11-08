import { Fragment } from "react";

export function Parent(props) {
  console.log(props);
  console.log(props.data);
  console.log(props.fruits);
  return (
    <div>
      <h1>I am Parent Component</h1>
      <h1>{props.data}</h1>
      <ol>
        {props.fruits.map((element, index) => {
          return (
            <Fragment key={index}>
              <li>{element}</li>
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
}
