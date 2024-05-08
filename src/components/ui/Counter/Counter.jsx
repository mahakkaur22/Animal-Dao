import CountUp from "react-countup";
import "./counter.css";
import React from "react";

export default function Counter() {
  return (
    <div className="CounterHeroContainer">
      <div className="CounterHeroTextContainer">
        <div className="CounterHeroText2">
          <CountUp end={450} duration={3} />
        </div>
        <div className="CounterHeroText1">Collections</div>
      </div>
      <div className="CounterHeroTextContainer">
        <div className="CounterHeroText2">
          <CountUp end={40} duration={3} />
        </div>
        <div className="CounterHeroText1">Artist</div>
      </div>
      <div className="CounterHeroTextContainer">
        <div className="CounterHeroText2">
          <CountUp end={300} duration={3} />
        </div>
        <div className="CounterHeroText1">Community Members</div>
      </div>
    </div>
  );
}
