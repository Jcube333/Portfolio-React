import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="n-Wrapper">
      <div className="n-left">
        <div className="n-name"> Jcube333 </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Stats</li>
            <li>Projects</li>
            <li>Certifications</li>
          </ul>
        </div>
        <button className="button">Contact Me</button>
      </div>
    </div>
  );
}

export default Navbar;
