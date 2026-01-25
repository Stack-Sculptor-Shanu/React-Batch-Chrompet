import React from "react";
import Logo from "./Logo";
import Navlists from "./Navlists";

const NavbarContainer = () => {
  return (
    <div className="flex items-center justify-between h-[60px]">
      <Logo></Logo>
      <Navlists />
    </div>
  );
};

export default NavbarContainer;
