import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="Skills-Wrapper">
      <div className="s-left">
        <h2>
          My Acquired <br />
          <span>Skills</span>
        </h2>
        <p>
          I am skilled at a plethora of things. <br />I like understanding the
          logic of problem solving.
        </p>

        <button className="button s-button">Download CV</button>
      </div>
      <div className="s-right">I am right.</div>
    </div>
  );
}

export default Skills;
