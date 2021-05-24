import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/actions/authAction";
import { GLOBALTYPES } from "../redux/constants/globalTypes";
import Avatar from "./Avatar";

const Header = () => {
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(useLocation());
  const { pathname } = useLocation();
  const isActive = (event) => {
    if (event === pathname) return "active";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <Link to="/">
        <h1 className="navbar-brand text-uppercase p-0 m-0 ">MeetUp-Network</h1>
      </Link>
      <div className="menu">
        <ul className="navbar-nav flex-row">
          <li className={`nav-item px-1 ${isActive("/")}`}>
            <Link className="nav-link" to="/">
              <i className="fas fa-home "></i>
            </Link>
          </li>
          <li className={`nav-item px-1 ${isActive("/message")}`}>
            <Link className="nav-link" to="/message">
              <i className="fas fa-paper-plane"></i>
            </Link>
          </li>
          <li className={`nav-item px-1 ${isActive("/discover")}`}>
            <Link className="nav-link" to="/discover">
              <i className="fas fa-compass"></i>
            </Link>
          </li>
          <li className={`nav-item px-1 ${isActive("/notify")}`}>
            <Link className="nav-link" to="/notify">
              <i className="fas fa-heart"></i>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Avatar src={auth.user.avatar} />
            </span>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
                Profile
              </Link>

              <label
                htmlFor="theme"
                className="dropdown-item"
                onClick={() =>
                  dispatch({
                    type: GLOBALTYPES.THEME,
                    payload: !theme,
                  })
                }
              >
                {theme ? "Light mode" : "Dark mode"}
              </label>

              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="/"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
