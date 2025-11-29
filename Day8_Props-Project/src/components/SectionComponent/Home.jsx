import firstSection from "../../assets/firstSection.mp4";
import FooterContainer from "../footer/FooterContainer";
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
    <div>
      <NavbarContainer />
      <div className="allpages">
        <div className="sectionsContainer">
          <div className="pages">
            <video
              src={firstSection}
              loop
              autoPlay
              muted
              className="firstSection"
            ></video>

            <div className="content">
              <h1 className="heading">{contentObj.heading}</h1>
              <p className="description">{contentObj.description}</p>
              <div className="btn">
                <button className="btnText">
                  {contentObj.btnText} <FaArrowRight className="arrow" />
                </button>
              </div>
            </div>
          </div>
          <PagesDetails />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}
export default Home;
