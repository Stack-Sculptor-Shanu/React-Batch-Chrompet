import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const App = () => {
  let [userData, setUserData] = useState(null);
  //   async function fetchData() {
  //     let data = await fetch("https://api.github.com/users");
  //     console.log(data);
  //     let finaldata = await data.json();
  //     console.log(finaldata);
  //   }
  //   fetchData();

  async function fetchData() {
    let { data } = await axios.get("https://api.github.com/users");
    // console.log(data);
    setUserData(data);
  }

  console.log(userData);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Use Effect Hook in React JS</h1>
      {userData?.map((ele, index) => {
        console.log(ele);
        return (
          <Fragment key={index}>
            <h3>{ele.login}</h3>
            <img src={ele.avatar_url} alt="" height={"100px"} width={"100px"} />
            <a href={ele.html_url}>Visit github Profile </a>
          </Fragment>
        );
      })}
    </div>
  );
};

export default App;
