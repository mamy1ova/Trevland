import React from "react";
import ImageBlockOne from "../assets/images/imageBlockOne.png";
import "./BlockOne.css";

const BlockOne = (props) => {
  return (
    <div className="block-one">
      <div className="logo">
        <p>{props.logo}</p>
      </div>
      <div className="menu">
        <ul className="ul">
          <li><a href="#">{props.menuItems[0]}</a></li>
          <li><a href="#">{props.menuItems[1]}</a></li>
          <li><a href="#">{props.menuItems[2]}</a></li>
          <li><a href="#">{props.menuItems[3]}</a></li>
          <li><a href="#">{props.menuItems[4]}</a></li>
        </ul>
      </div>
      <div className="buttonHeader">
        <button> {props.buttonHeaderText} </button>
      </div>
      <img src= {ImageBlockOne} alt="Изображение" className="image" />
      <div className="TextBlockOne">
        <h1> {props.TextBlockOne} </h1>
        <p> {props.TextBlockOnePtag} </p>
        <button> {props.buttonText} </button>
      </div>
    </div>
  );
};

export default BlockOne;
