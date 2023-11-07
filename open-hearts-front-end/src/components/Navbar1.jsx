// import "./App.css"
import heartLogo from "../images/twohearts.png";

import React, { useEffect, useState } from "react";
import "../navbar.css";
function Navbar1() {
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  useEffect(() => {
    // Make an API request to fetch the total donation amount
    fetch("http://localhost:5001/families/fetchtotaldonationamount")
      .then((response) => response.json())
      .then((data) => {
        setTotalDonationAmount(Math.round(data.totalDonationAmount));
      })
      .catch((error) => {
        console.error("Error fetching total donation amount:", error);
      });
  }, []);
  return (
    <nav className="navbar navbar1 navbar-expand-lg navbar-light bg-dark">
        
          <a href="/"
            className="navbar-brand">
           <img className="heart-logo" src={heartLogo}
            alt="image of two hearts"
          />
</a>
       
     
      <div className={`collapse navbar-collapse menu ${isMobile ? 'active' : ''}`} id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        
        <li >
          <a className="nav-link" href="/" rel="Home Page">
            Home
          </a>
        </li>
        <li >
          <a className="nav-link" href="/families" rel="Families">
            Families
          </a>
        </li>
        <li >
          <a className="nav-link" href="/families/new" rel="Add Family">
            Add Family
          </a>
        </li>
        <li >
          <a className="nav-link" href="/donations" rel="Donate">
            Donate
          </a>
        </li>
      </ul>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
  <div className={`bar ${isMobile ? 'activeBar' : ''}`}></div>
  <div className={`bar ${isMobile ? 'activeBar' : ''}`}></div>
  <div className={`bar ${isMobile ? 'activeBar' : ''}`}></div>
</div>
<div className="close-icon">X</div>
     
<div className="menu-and-total-raised"> {/* Container for menu and Total raised */}
    <ul className={`menu ${isMobile ? 'activeTotalRaised' : ''}`}>
      {/* Menu items */}
    </ul>
    <p className="total-raised">
      <span>Total raised ${totalDonationAmount}</span>
    </p>
  </div>
     
    </nav>
  );
}

export default Navbar1;
