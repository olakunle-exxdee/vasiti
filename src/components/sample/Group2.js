import React from "react";
import Sample from "./Sample";
import image1 from "./image11.png";
import image2 from "./image12.png";
import image3 from "./image13.png";
import image4 from "./image14.png";
import image5 from "./image15.png";
import image6 from "./image16.png";
import "./sample.scss";
const Group = () => {
  return (
    <div className="flex group">
      <Sample name={"Temi Obadofin"} image={image6} vendor={"vendor"} />
      <Sample name={"Promise Ejiofor"} image={image4} vendor={"vendor"} />
      <Sample name={"Feyisola Arinola"} image={image2} vendor={"vendor"} />
      <Sample name={"Karen Ibeh"} image={image5} vendor={"vendor"} />
      <Sample name={"Oluchi Uzo"} image={image3} vendor={"vendor"} />
      <Sample name={"Amos Okafor"} image={image1} vendor={"vendor"} />
    </div>
  );
};

export default Group;
