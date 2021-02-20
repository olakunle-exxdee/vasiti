import React from "react";
import Sample from "./Sample";
import image1 from "./Ellipse22.png";
import image2 from "./image.png";
import image3 from "./image1.png";
import image4 from "./image3.png";
import image5 from "./image4.png";
import image6 from "./image5.png";
import "./sample.scss";
const Group = () => {
  return (
    <div className="flex group">
      <Sample
        name={"Joseph Ike"}
        image={image1}
        town={"ikeja"}
        customer={"customer"}
      />
      <Sample
        name={"Adetola Fashina"}
        image={image4}
        town={"ibadan"}
        customer={"customer"}
      />
      <Sample
        name={"Emmanuel Fayemi"}
        image={image3}
        town={"akoka"}
        customer={"customer"}
      />
      <Sample
        name={"Chisom Obilor"}
        image={image6}
        town={"magodo"}
        vendor={"vendor"}
      />
      <Sample
        name={"Adunoluwa Adeyemi"}
        image={image5}
        town={"iwo road"}
        vendor={"vendor"}
      />
      <Sample
        name={"Chidi Okeke"}
        image={image2}
        town={"shomolu"}
        vendor={"vendor"}
      />
    </div>
  );
};

export default Group;
