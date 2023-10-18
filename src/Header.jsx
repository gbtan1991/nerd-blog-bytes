import React from "react";
import logo from "./assets/geek-glasses.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-bar">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Nerd Blog Bytes</h1>
      </div>

      <div className="nav-menu"></div>
    </div>
  );
};

export default Header;
