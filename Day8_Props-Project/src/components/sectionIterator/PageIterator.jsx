import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";

const PageIterator = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((ele, index) => {
        console.log(ele);
        return (
          <div key={index} className="pages">
            {ele.media.includes("mp4") ? (
              <video
                src={ele.media}
                loop
                muted
                autoPlay
                className="pagesVideo"
              ></video>
            ) : (
              <img src={ele.media} className="imgSection" />
            )}

            <div className="content">
              <h1 className="heading">{ele.contentDetails.heading}</h1>
              <p className="description">{ele.contentDetails.description}</p>
              <div className="btn">
                <button className="btnText">
                  {ele.contentDetails.btnText}
                  <FaArrowRight className="arrow" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PageIterator;
