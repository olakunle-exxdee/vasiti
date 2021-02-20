import React from "react";
import Sample from "./Sample";
import image1 from "./Ellipse22.png";
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
        image={image1}
        town={"ibadan"}
        customer={"customer"}
      />
      <Sample
        name={"Emmanuel Fayemi"}
        image={image1}
        town={"akoka"}
        customer={"customer"}
      />
      <Sample
        name={"Chisom Obilor"}
        image={image1}
        town={"magodo"}
        vendor={"vendor"}
      />
      <Sample
        name={"Adunoluwa Adeyemi"}
        image={image1}
        town={"iwo road"}
        vendor={"vendor"}
      />
      <Sample
        name={"Chidi Okeke"}
        image={image1}
        town={"shomolu"}
        vendor={"vendor"}
      />
    </div>
  );
};

export default Group;
