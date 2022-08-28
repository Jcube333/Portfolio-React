import React from "react";
import "./Skills.css";
import Card from "../Card/Card";
import Heart from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import Resume from "./JaiminResume.pdf";
import { motion } from "framer-motion";

function Skills() {
  const transition = { duration: 2, type: "spring" };
  return (
    <div id="Skills" className="Skills-Wrapper">
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
        <motion.div
          initial={{ left: "22rem", top: "19.5rem" }}
          whileInView={{ left: "13rem", top: "19.5rem" }}
          transition={transition}
          className="card"
          // style={{ left: "14rem" }}
        >
          <div className="blur s-blur1"></div>
          <a href="https://www.youtube.com/channel/UCMUGedWGaaSwLPjLn03Gvqg/videos">
            <Card
              image={Heart}
              title="Design"
              Desc="Canva, Figma, UI/UX , Wireframing"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ left: "-10rem", top: "13rem" }}
          whileInView={{ left: "-6rem", top: "13rem" }}
          transition={transition}
          className="card"
          // style={{ left: "-6rem", top: "13rem" }}
        >
          <a href="https://github.com/Jcube333?tab=repositories">
            <Card
              image={Glasses}
              title="Developer"
              Desc="Html, Css, JS , ReactJS, ExpressJS, MongoDB"
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ left: "22rem", top: "1rem" }}
          whileInView={{ left: "12rem", top: "1 rem" }}
          transition={transition}
          className="card"
          // style={{ left: "12rem", top: "19.5rem" }}
        >
          <a href="https://www.codechef.com/users/jcube_333">
            <Card
              image={Humble}
              title="CP"
              Desc="C++, CodeChef, GFG , CodeForces"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
