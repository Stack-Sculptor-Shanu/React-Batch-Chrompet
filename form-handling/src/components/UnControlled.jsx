import React, { useRef } from "react";

const UnControlled = () => {
  let username = useRef("");
  let password = useRef("");
  //   console.log(username, password);

  function handleSubmit(e) {
    e.preventDefault();
    let usernameData = username.current.value;
    let passwordData = password.current.value;
    console.log(usernameData, passwordData);
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input type="text" name="username" id="username" ref={username} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" ref={password} />
        <button>Login Here</button>
      </form>
    </div>
  );
};

export default UnControlled;
