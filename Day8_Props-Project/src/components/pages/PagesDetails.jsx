import React from "react";
import secondPage from "../../assets/secondSection.jpg";
import thirdPage from "../../assets/thirdSection.mp4";
import fourthPage from "../../assets/fourthSection.jpg";
import fifthPage from "../../assets/fifthSection.mp4";
import PageIterator from "../sectionIterator/PageIterator";

const PagesDetails = () => {
  let contents = [
    {
      media: secondPage,
      contentDetails: {
        heading: "Revolutionizing space technology",
        description:
          "SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
        btnText: "Learn more",
      },
    },

    {
      media: thirdPage,
      contentDetails: {
        heading: "World’s leading launch service provider",
        description:
          "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
        btnText: "Reserve your Ride",
      },
    },

    {
      media: fourthPage,
      contentDetails: {
        heading: "Advancing human spaceflight",
        description:
          "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
        btnText: "Join a Mission",
      },
    },

    {
      media: fifthPage,
      contentDetails: {
        heading: "Delivering high-speed internet from space",
        description:
          "Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
        btnText: "Order Now",
      },
    },
  ];
  return (
    <>
      <PageIterator data={contents} />
    </>
  );
};

export default PagesDetails;
