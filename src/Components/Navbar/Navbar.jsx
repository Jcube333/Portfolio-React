import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

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
            <Link to="Home" smooth={true}>
              <li>Home</li>
            </Link>
            <Link to="Skills" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link to="Stats" smooth={true}>
              <li>Stats</li>
            </Link>
            <Link to="Certifications" smooth={true}>
              <li>Certifications</li>
            </Link>
            <Link to="Projects" smooth={true}>
              <li>Projects</li>
            </Link>
          </ul>
        </div>

        <Link to="Contact" smooth={true}>
          <button className="button">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
