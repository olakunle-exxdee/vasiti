import React from "react";
import "./sample.scss";

const Sample = ({ name, image, customer, town, vendor }) => {
  return (
    <div className="sample">
      <div className="sample__wrapper">
        <div className="img">
          <img src={image} alt="img" />
        </div>
        <div className="heading">
          <h2>{name}</h2>
          <div className="text">
            {town && <p>{town}</p>}
            <div className="custom">
              {customer && <p className="customer">{customer}</p>}
              {vendor && <p className="vendor">{vendor}</p>}
            </div>
          </div>
        </div>
        <p className="paragraph">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id deserunt nisi. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div>
    </div>
  );
};

export default Sample;
