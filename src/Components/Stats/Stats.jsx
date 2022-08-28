import React from "react";
import "./Stats.css";
import Circle from "../CircleStat/Circle";

function Stats() {
  return (
    <div id="Stats" className="Stats-Wrapper">
      <Circle n="9.5+" title="CGPA" desc="MUJ" />
      <Circle n="3⭐️" title="1709" desc="Codechef" />
      <Circle n="5+" title="Completed" desc="Projects" />
    </div>
  );
}

export default Stats;
