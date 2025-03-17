import React, { useEffect, useState } from "react";
import "../Styles/ProgressBar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 5), 100); //increments by 5 stops at 100
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [progress]);

  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <div className="p-parent-container">
      <h2>Progress Bar</h2>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
        <p>{progress}%</p>
      </div>
      <button onClick={resetProgress}>Restart</button>
    </div>
  );
};

export default ProgressBar;
