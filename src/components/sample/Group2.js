import React from "react";
import Sample from "./Sample";
import image1 from "./Ellipse22.png";
import "./sample.scss";
const Group = () => {
  return (
    <div className="flex group">
      <Sample name={"Joseph Ike"} image={image1} vendor={"vendor"} />
      <Sample name={"Adetola Fashina"} image={image1} vendor={"vendor"} />
      <Sample name={"Emmanuel Fayemi"} image={image1} vendor={"vendor"} />
      <Sample name={"Chisom Obilor"} image={image1} vendor={"vendor"} />
      <Sample name={"Adunoluwa Adeyemi"} image={image1} vendor={"vendor"} />
      <Sample name={"Chidi Okeke"} image={image1} vendor={"vendor"} />
    </div>
  );
};

export default Group;
