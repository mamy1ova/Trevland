import React from "react";
import "./BlockTwo.css";
import Turkey from "../assets/images/Turkey.png";
import KualaLumpur from "../assets/images/KualaLumpur.png";
import Korea from "../assets/images/Korea.png";

const BlockTwo = (props) => {
  return (
    <div className="block-two">
      <div className="textBlockTwo">
        <h2> {props.textHtewo} </h2>
        <p> {props.textP} </p>
      </div>
      <div className="cards-container">
        <div className="cardOne">
          <img src={Turkey} alt="Turkey" />
          <h3> {props.cardOneTextHthree} </h3>
          <p> {props.cardOneTextP} </p>
        </div>
        <div className="cardTwo">
          <img src={KualaLumpur} alt="KualaLumpur" />
          <h3> {props.cardTwoTextHthree} </h3>
          <p> {props.cardTwoTextP} </p>
        </div>
        <div className="cardThree">
          <img src={Korea} alt="Korea" />
          <h3> {props.cardThreeTextHthree} </h3>
          <p> {props.cardThreeTextP} </p>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
