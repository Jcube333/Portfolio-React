import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Jcube from "../../img/jcube.png";
import VecB from "../../img/Vector1.png";
import VecY from "../../img/Vector2.png";
// import Insta from "../../img/instagram.png";
// import Insta from "../../img/instagram.png";
// import Insta from "../../img/instagram.png";

function intro() {
  return (
    <div className="i-Wrapper">
      <div className="i-left">
        <div className="i-info">
          <h1>Hey! I am</h1>
          <h1>Jcube333</h1>
          <p>
            I am an avid competitive programmer. I love to design beautiful
            frontends.
          </p>
        </div>

        <div className="i-button button">Contact</div>

        <div className="i-links">
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={Linkedin} alt="" />
          </a>
          <a href="">
            <img src={Insta} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Jcube} alt="" />
        <img src={VecB} alt="" />
        <img src={VecY} alt="" />

        {/* <div className="">
            <FloatingComp image={} text1={} text2={}/>
        </div> */}
      </div>
    </div>
  );
}

export default intro;
