import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Navlists from "./Navlists";

function NavbarContainer() {
  return (
    <div className="navbar-container">
      <Logo />
      <Navlists />
      <Dropdown />
    </div>
  );
}

export default NavbarContainer;
