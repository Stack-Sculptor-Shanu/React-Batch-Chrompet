import React from "react";

const Home = () => {
  return (
    <div className="h-screen bg-blue-100 flex items-center justify-evenly">
      <div className="h-full w-[40%] bg-blue-500">Details</div>
      <div className="h-full w-[40%] bg-red-300 flex items-center justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2026/01/01/23/49/23-49-43-487_1280.jpg"
          alt=""
          className="h-[350px] w-[350px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
