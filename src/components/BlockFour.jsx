import React from "react";
import "./BlockFour.css";
import LargePhoto from "../assets/images/LargePhoto.png";
import Hiroshima from "../assets/images/Hiroshima.png";
import India from "../assets/images/India.png";
import Naltar from "../assets/images/Naltar.png";

const BlockFour = (props) => {
  return (
    <div className="block-four">
      <div className="textBlockFour">
        <h2> {props.textHtwo} </h2>
        <p> {props.textP} </p>
      </div>
      <div className="firsrImage">
        <img src={LargePhoto} alt="LargePhoto" />
        <h3> {props.firsrImageHthree} </h3>
        <p> {props.firsrImageP} </p>
        <h4> {props.firsrImageHfour} </h4>
      </div>
      <div className="secondImage">
        <img src={Hiroshima} alt="Hiroshima" />
        <div className="textSecondImage">
          <h3> {props.secondImageHthree} </h3>
          <p> {props.secondImageP} </p>
          <h4> {props.secondImageHfour} </h4>
        </div>
      </div>
      <div className="thirdImage">
        <img src={India} alt="India" />
        <div className="textTirdImage">
          <h3> {props.thirdImageHthree} </h3>
          <p> {props.thirdImageP} </p>
          <h4> {props.thirdImageHfour} </h4>
        </div>
      </div>
      <div className="fourthImage">
        <img src={Naltar} alt="Naltar" />
        <div className="textFourImage">
          <h3> {props.fourthImageHthree} </h3>
          <p> {props.fourthImageP} </p>
          <h4> {props.fourthImageHfour} </h4>
        </div>
      </div>
    </div>
  );
};

export default BlockFour;
