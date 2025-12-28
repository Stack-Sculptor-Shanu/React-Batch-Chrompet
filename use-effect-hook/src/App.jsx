import React, { useEffect, useState } from "react";

const App = () => {
  let [githubData, setGithubData] = useState(null);
  let [count, setCount] = useState(0);
  async function fetchData() {
    let data = await fetch("https://api.github.com/users");
    let finaldata = await data.json();
    setGithubData(finaldata);
    console.log("Fetch data function is running ");
  }
  //   useEffect(() => {
  //     fetchData();
  //   });

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  useEffect(() => {
    fetchData();
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
