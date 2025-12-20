import { useState } from "react";

const Controlled = () => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  //   function handleUsername(e) {
  //     // console.log(e);
  //     // console.log(e.target.value);
  //     setUsername(e.target.value);
  //   }

  //   function handlePassword(e) {
  //     setPassword(e.target.value);
  //   }

  const [formData, setFormdata] = useState({
    userName: "",
    password: "",
    email: "",
  });

  function handleChange(e) {
    // console.log(e.target);
    // console.log(e.target.value);
    let { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormdata({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <h1>Controlled Form</h1>
      <form action="Demo" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input
          type="text"
          name="userName"
          placeholder="Enter username"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter emaiil"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Controlled;
