import React from "react";
import "./FloatingComp.css";

function FloatingComp(image, text1, text2) {
  return (
    <div className="float-Wrapper">
      <img src={image} alt="" />
      <span>{text1}</span>
      <span>{text2}</span>
    </div>
  );
}

export default FloatingComp;
