import React, { useState } from "react";
import "../Styles/ShowHide.css";

const ShowHide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="parent-container-box">
      <div className="heading-text-container">
        <h1>Random Heading</h1>
        {isOpen && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            fugiat. Animi, libero. Quos, unde, vel minus cumque repellendus
            impedit voluptatem nihil at in quo, nam laboriosam explicabo libero
            aut sint.
          </p>
        )}
      </div>
      <button className="toggle-btnn" onClick={handleToggle}>
        {isOpen ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ShowHide;
