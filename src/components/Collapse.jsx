import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";
import "../sass/main.scss";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse_container">
      <div className="collapse">
        <h2 className="collapse__title">{title}</h2>
        <button onClick={display}>
          <img src={arrow} alt="Ouvrir le texte" />
        </button>
      </div>
      <div className="collapse__description">
        {isOpen && <p>{description}</p>}
      </div>
    </div>
  );
}

export default Collapse;
