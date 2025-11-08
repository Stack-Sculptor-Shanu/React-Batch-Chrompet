import firstSection from "../../assets/firstSection.mp4";
import NavbarContainer from "./../navbar/NavbarContainer";

function Home() {
  let contentObj = {
    heading: "Making Life Multiplanetary",
    description:
      "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
    btnText: "Explore",
  };
  return (
    <div>
      <NavbarContainer />
      <video src={firstSection}></video>
    </div>
  );
}
export default Home;
