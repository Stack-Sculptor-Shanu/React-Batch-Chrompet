import Login from "./components/Login";
import NotLoggedIn from "./components/NotLoggedIn";

const App = () => {
  let isLoggedIn = false;

  return (
    <div>
      {/* Short Circuiting */}
      {isLoggedIn && <Login />}
      {!isLoggedIn && <NotLoggedIn />}
    </div>
  );

  //   switch (isLoggedIn) {
  //     case true:
  //       return <Login />;
  //       break;
  //     case false:
  //       return <NotLoggedIn />;
  //     default:
  //       break;
  //   }

  //   if (isLoggedIn) {
  //     return <Login />;
  //   } else {
  //     return <NotLoggedIn />;
  //   }
  //   return (
  //     <div>
  //       <h1>Conditional Rendering</h1>
  //       {/* {isLoggedIn ? "You have access" : "you don't have any access"} */}
  //       {isLoggedIn ? <Login /> : <NotLoggedIn />}
  //     </div>
  //   );
};

export default App;
