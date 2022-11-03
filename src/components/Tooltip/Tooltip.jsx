import React, { useState, useEffect } from "react";
import "./Tooltip.css";

const Tooltip = ({content, direction, delay, status, children}) => {
  let timeout;
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("");

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  useEffect(() => {
    status === "success"
      ? setColor("bg-green-500")
      : setColor("bg-red-500");
  }, [status]);

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || "top"} ${color} text-sm w-11/12 sm:w-max`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
