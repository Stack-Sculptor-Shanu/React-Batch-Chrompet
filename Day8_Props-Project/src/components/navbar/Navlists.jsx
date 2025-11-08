import ListIterator from "../navbarIterator/ListIterator";

function Navlists() {
  let navlist = [
    "Vehicles",
    "launches",
    "Human Spaceflight",
    "Rideshare",
    "starlink",
    "Starshield",
    "Company",
    "shop",
  ];
  return (
    <div className="navlist">
      <ListIterator navlist={navlist} />
    </div>
  );
}
export default Navlists;
