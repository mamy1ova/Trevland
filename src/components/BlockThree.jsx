import React from "react";
import "./BlockThree.css";
import China from "../assets/images/China.png";
import Dizin from "../assets/images/Dizin.png";
import Sajek from "../assets/images/Sajek.png";
import Osaka from "../assets/images/Osaka.png";
import Icon from "../assets/icons/Group 41.svg";
import Image from "../assets/icons/Group 166.png";
import QuotesIconTwo from "../assets/icons/Group 146.svg";
import QuotesIconOne from "../assets/icons/Group 145.svg";

const BlockThree = (props) => {
  return (
    <div className="block-three">
      <div className="textBlockThree">
        <h2> {props.firsText} </h2>
        <p> {props.secondText} </p>
      </div>
      <div className="CardsBlockThree">
        <div className="firstCard">
          <img src={China} alt="China" />
          <h3>The Great Wall </h3>
          <img src={Icon} alt="icon" /> China
          <p>7 Day 8 Nights</p>
          <span>$850/person</span>
        </div>
        <div className="secondCard">
          <img src={Dizin} alt="Dizin" />
          <h3>Dizin</h3>
          <img src={Icon} alt="icon" /> Iran
          <p>5 Day 6 Nights</p>
          <span>$550/person</span>
        </div>
        <div className="thirdCard">
          <img src={Sajek} alt="Sajek" />
          <h3>Sajek Valley</h3>
          <img src={Icon} alt="icon" /> Bangladesh
          <p>3 Day 4 Nights</p>
          <span>$400/person</span>
        </div>
        <div className="fourthCard">
          <img src={Osaka} alt="Osaka" />
          <h3>Osaka Castle</h3>
          <img src={Icon} alt="icon" /> Japan
          <p>4 Day 5 Nights</p>
          <span>$700/person</span>
        </div>
      </div>
      <div className="scroll">
        <img src={QuotesIconOne} alt="QuotesIconOne" />
        <img src={Image} alt="vector" />
        <img src={QuotesIconTwo} alt="QuotesIconTwo" />
      </div>
    </div>
  );
};

export default BlockThree;
