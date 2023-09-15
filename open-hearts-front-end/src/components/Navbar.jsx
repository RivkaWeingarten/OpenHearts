import React from "react";
// import "./App.css"
import heartLogo from "../images/twohearts.png";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img
            className="heart-logo"
            src={heartLogo}
            alt="image of two hearts"
          />
        </li>
        <li>
          <a href="/" rel="Home Page">
            Home
          </a>
        </li>
        <li>
          <a href="/families" rel="Families">
            Families
          </a>
        </li>
        <li>
          <a href="/families/new" rel="Add Family">
            Add Family
          </a>
        </li>
        <li>
          <a href="/donate" rel="Donate">
            Donate
          </a>
        </li>
      </ul>
      {/* <img className="heart-logo" src={heartLogo} alt="image of two hearts" /> */}
      {/* //need function to figure out total raised' */}
      <p className="total-raised"> Total raised $1000</p>
    </nav>
  );
}

export default Navbar;
