// You need to build a simple Counter App using React and the useState hook. The counter should have two buttons:
// 	1.	Increment → Increases the count by 1 when clicked.
// 	2.	Decrement → Decreases the count by 1 when clicked.

import React, { useState } from "react";
import "../Styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    {
      count > 0 && setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="parent-container">
      <div className="count-container">Count:{count}</div>
      <div className="buttons">
        <button className="inc-btn" onClick={handleIncrement}>
          Increment count
        </button>
        <button className="dec-btn" onClick={handleDecrement}>
          Decrement count
        </button>
      </div>
    </div>
  );
};

export default Counter;
