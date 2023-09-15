
import React from "react";


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
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
    </nav>
  );
}

export default Navbar;
