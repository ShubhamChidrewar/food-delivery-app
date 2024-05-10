import React from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
