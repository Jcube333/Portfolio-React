import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card-Wrapper">
      <img src={props.image} alt="" />
      <span>{props.title}</span>
      <br />
      <span>{props.Desc}</span>

      <button className="c-button">Learn More</button>
    </div>
  );
}

export default Card;
