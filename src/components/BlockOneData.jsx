import React from "react";
import BlockOne from "./BlockOne";

const BlockOneData = () => {
  const menuItems = ["Home", "Location", "Blog", "About", "Contact"];
  const logo = "Trevland";
  const buttonHeaderText = "Booking now";
  const TextBlockOne = "Railtrips To Here, There And Everywhere!";
  const TextBlockOnePtag =
    " We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.";
  const buttonText = "Explore more";

  return (
    <div>
      <BlockOne
        menuItems={menuItems}
        logo={logo}
        buttonHeaderText={buttonHeaderText}
        TextBlockOne={TextBlockOne}
        TextBlockOnePtag={TextBlockOnePtag}
        buttonText={buttonText}
      />
    </div>
  );
};

export default BlockOneData;
