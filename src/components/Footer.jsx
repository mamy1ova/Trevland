import React from "react";
import "./Footer.css";
import icons from "../assets/icons/Group 173.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="firstBlock">
        <div className="text">Trevland</div>
        <p>Contact us</p>
        <span>
          <a href="#">@shovasatkhira88.com</a>
        </span>
      </div>
      <img src={icons} alt="messengers" />
      <div className="secondBlock">
        <div className="footerMenu">
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our story</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="thirdBlock">
        <div className="legal">
          <ul className="legalContainer">
          <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fourthBlock">
        <h3>SUBSCRIBE NOW</h3>
        <form className="form">
          <input type="text" placeholder="Email" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
