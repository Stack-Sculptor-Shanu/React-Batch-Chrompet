import firstSection from "../../assets/firstSection.mp4";
import PagesDetails from "../pages/PagesDetails";
import NavbarContainer from "./../navbar/NavbarContainer";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  let contentObj = {
    heading: "Making Life Multiplanetary",
    description:
      "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
    btnText: "Explore",
  };
  return (
    <div className="allpages">
      <NavbarContainer />
      <div className="sectionsContainer">
        <div>
          <video
            src={firstSection}
            loop
            autoPlay
            muted
            className="firstSection"
          ></video>

          <div className="content">
            <h1 className="heading">Making life multiplanetary</h1>
            <p className="description">
              SpaceX was founded under the belief that a future where humanity
              is out exploring the stars is fundamentally more exciting than one
              where we are not.
            </p>
            <div className="btn">
              <button className="btnText">
                Explore <FaArrowRight className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PagesDetails />
    </div>
  );
}
export default Home;
