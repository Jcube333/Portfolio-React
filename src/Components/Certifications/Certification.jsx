import React from "react";
import "./Certification.css";
import Coursera from "../../img/coursera.png";
import Udemy from "../../img/Udemy.webp";
import Codechef from "../../img/CodeChef.jpeg";
import Oracle from "../../img/Oracle.png";
import Unstop from "../../img/unstop.png";

function Certification() {
  return (
    <div className="Certi-Wrapper">
      <div className="s-left">
        <h2>
          My Acquired <br />
          <span>Certifications</span>
        </h2>
        <p>
          I am always curious to explore the new in Tech. What better way to
          learn than MOOCs!!
        </p>

        <button className="button s-button">See Certificates</button>

        <div className="blur2 s-blur2"></div>
      </div>

      <div className="c-right">
        <div className="big-circle">
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
        </div>
        <div className="bg-circle bluebg"></div>
        <div className="bg-circle yellowbg"></div>
      </div>
    </div>
  );
}

export default Certification;
