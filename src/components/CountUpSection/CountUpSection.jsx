import { useState } from "react";
import "./CountUpSection.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountUpSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
      onExit={() => {
        setCounterOn(false);
      }}
    >
      <div className="countUp">
        <div className="countItem">
          <span className="amount">{counterOn && <CountUp end={600} />}+</span>
          <span className="text">Students</span>
        </div>
        <span className="divider"></span>
        <div className="countItem">
          <span className="amount">{counterOn && <CountUp end={85} />}+</span>
          <span className="text">Staff</span>
        </div>
        <span className="divider"></span>
        <div className="countItem">
          <span className="amount">{counterOn && <CountUp end={2300} />}+</span>
          <span className="text">Alumni</span>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountUpSection;
