import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <div>
    <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
    <br />

    <h1>
      I'm <br />
      <ReactTyped
        strings={[
          " Software Developer",
          " Web Designer",
          " UI and UX designer",
        ]}
        typeSpeed={60}
        backSpeed={40}
        //   attr="placeholder"
        loop
      ></ReactTyped>
    </h1>
  </div>
);

export default MyComponent;
