import React from "react";
import "./Certification.css";
import Coursera from "../../img/coursera.png";
import Udemy from "../../img/Udemy.webp";
import Codechef from "../../img/CodeChef.jpeg";
import Oracle from "../../img/Oracle.png";
import Unstop from "../../img/unstop.png";
import { motion } from "framer-motion";

function Certification() {
  return (
    <div id="Certifications" className="Certi-Wrapper">
      <div className="s-left">
        <h2>
          My Acquired <br />
          <span>Certifications</span>
        </h2>
        <p>
          I am always curious to explore the new in Tech. What better way to
          learn than MOOCs!!
        </p>
        <a href="https://www.linkedin.com/in/jaimin-judal/">
          <button className="button s-button">See Certificates</button>
        </a>

        <div className="blur2 s-blur2"></div>
      </div>

      <div className="c-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ margin: "-40px" }}
          className="big-circle"
        >
          <div className="small-circle">
            <img src={Codechef} alt="" />
          </div>
          <div className="small-circle">
            <img src={Udemy} alt="" />
          </div>
          <div className="small-circle">
            <img src={Coursera} alt="" />
          </div>
          <div className="small-circle">
            <img src={Oracle} alt="" />
          </div>
          <div className="small-circle">
            <img src={Unstop} alt="" />
          </div>
        </motion.div>
        <div className="bg-circle bluebg"></div>
        <div className="bg-circle yellowbg"></div>
      </div>
    </div>
  );
}

export default Certification;
