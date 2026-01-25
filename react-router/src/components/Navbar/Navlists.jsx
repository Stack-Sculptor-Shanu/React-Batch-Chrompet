import { Link } from "react-router-dom";

const Navlists = () => {
  return (
    <div className="w-[40%] h-[100%] bg-amber-100">
      <ul className="flex items-center justify-evenly w-[100%] h-[100%]">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlists;
