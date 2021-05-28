import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";
import Logo from "../../images/connect2.png";

const Header = () => {
  return (
    <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
        <Link to="/" className="logo">
          <h1
            className="navbar-brand text-uppercase p-0 m-0 "
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <img src={Logo} alt="logo" width="48px" height="48px" /> Meet-Up
          </h1>
        </Link>
        <Search />
        <Menu />
      </nav>
    </div>
  );
};

export default Header;
