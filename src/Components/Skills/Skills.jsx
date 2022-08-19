import React from "react";
import "./Skills.css";
import Card from "../Card/Card";
import Heart from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import Resume from "./JaiminResume.pdf";

function Skills() {
  return (
    <div className="Skills-Wrapper">
      <div className="s-left">
        <h2>
          My Acquired <br />
          <span>Skills</span>
        </h2>
        <p>
          I am skilled at a plethora of things. I like understanding the logic
          of problem solving.
        </p>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur2 s-blur2"></div>
      </div>
      <div className="s-right">
        <div className="card" style={{ left: "14rem" }}>
          <div className="blur s-blur1"></div>
          <Card
            image={Heart}
            title="Design"
            Desc="Canva, Figma, UI/UX , Wireframing"
          />
        </div>
        <div className="card" style={{ left: "-6rem", top: "13rem" }}>
          <Card
            image={Glasses}
            title="Developer"
            Desc="Html, Css, JS , ReactJS, ExpressJS, MongoDB"
          />
        </div>
        <div className="card" style={{ left: "12rem", top: "19.5rem" }}>
          <Card
            image={Humble}
            title="CP"
            Desc="C++, CodeChef, GFG , CodeForces"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
