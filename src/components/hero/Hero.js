import React from "react";
import "./hero.scss";
import imag from "../hero/testimony.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1 className="heading">
          Amazing <br /> Experiences from Our Wonderful Customers
        </h1>
        <p className="text">
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </div>
      <div className="content-img">
        <div className="box"></div>
        <div className="img">
          <img src={imag} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
