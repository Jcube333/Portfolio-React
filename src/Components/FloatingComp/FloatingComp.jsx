import React from "react";
import "./FloatingComp.css";

function FloatingComp(props) {
  return (
    <div className="float-Wrapper">
      <img className="float-img" src={props.image} alt="" />
      <span>
        {props.txt1}
        <br />
        {props.txt2}
      </span>
    </div>
  );
}

export default FloatingComp;
