import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
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
          <li>
            <button
              className="login"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
