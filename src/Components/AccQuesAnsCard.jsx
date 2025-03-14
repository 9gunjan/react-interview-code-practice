import React from "react";
import "../Styles/Accordion.css";

const AccQuesAnsCard = ({ data, isActive, toggleBtn }) => {
  return (
    <div className="box">
      <div className="question-ans-container">
        <h2> {data.Q}</h2>
        {isActive && <p>{data.A}</p>}
      </div>

      <div className="btn-containerr">
        <button onClick={toggleBtn}>{isActive ? "⬆️ " : "⬇️"}</button>
      </div>
    </div>
  );
};

export default AccQuesAnsCard;
