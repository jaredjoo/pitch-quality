import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Team 10: Quantifying MLB Pitch Quality
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Introduction
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/featureengineering"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Feature Engineering
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/machinelearning"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Machine Learning
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/results"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Results
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/references"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                References
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
