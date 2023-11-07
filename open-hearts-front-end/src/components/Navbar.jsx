// import "./App.css"
import heartLogo from "../images/twohearts.png";
import
import React, { useEffect, useState } from "react";

function Navbar() {
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);

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
          <a href="/donations" rel="Donate">
            Donate
          </a>
        </li>
      </ul>
      {/* <img className="heart-logo" src={heartLogo} alt="image of two hearts" /> */}
      {/* //need function to figure out total raised' */}
      <p className="total-raised">
        <span>Total raised ${totalDonationAmount}</span>
      </p>
    </nav>
  );
}

export default Navbar;
