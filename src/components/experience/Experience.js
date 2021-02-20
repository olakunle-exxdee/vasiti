import React from "react";
import "./experience.scss";
import images from "./woman.png";

const Experience = () => {
  return (
    <div className="exp__wrapper">
      <div className="exp">
        <div className="exp__content">
          <h3 className="oby">Oby’s Experience </h3>
          <h3 className="tolu">Tolu & Joy’s Experience</h3>
          <p className="customer">CUSTOMER</p>
          <p className="text">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>

          <div className="share-wrapper">
            <p className="share">Share your own story!</p>
            <div className="svg">
              <svg
                width="150"
                height="12"
                viewBox="0 0 297 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125"
                  stroke="#FF5C00"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="exp__content-img">
          <div className="box"></div>
          <div className="img-box">
            <img src={images} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
