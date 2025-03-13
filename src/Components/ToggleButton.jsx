// You need to create a Toggle Button using React and the useState hook. The button should switch between two states:
// 	1.	True (ON) → When clicked, the state changes to false (OFF).
// 	2.	False (OFF) → When clicked, the state changes to true (ON).

import React, { useState } from "react";
import "../Styles/ToggleBtn.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div className="btn-container">
      <button
        className={`toggle-btn ${isOn ? "on" : "off"}`}
        onClick={handleToggle}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default ToggleButton;
