import React from "react";
import "../Styles/Accordion.css";
import AccQuesAnsCard from "./AccQuesAnsCard";
import { useState } from "react";
const data = [
  {
    Q: "Q. what is your name",
    A: "A. My name is Gunjan",
  },
  {
    Q: "Q. What u like",
    A: "A. I like ice cream",
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="container-parent">
      <h1>Frequently Asked Questions</h1>
      {data.map((item, index) => (
        <AccQuesAnsCard
          data={item}
          key={index}
          isActive={isOpen === index}
          toggleBtn={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
