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
      <div className="collapse" onClick={display}>
        <h2 className="collapse__title">{title}</h2>
        <button>
          <img
            className={`collapse__arrow ${isOpen ? "rotate" : ""}`}
            src={arrow}
            alt="Ouvrir le texte"
          />
        </button>
      </div>
      <div className={`collapse__description ${isOpen ? "show" : ""}`}>
        <p className="collapse__text">{description}</p>
      </div>
    </div>
  );
}

export default Collapse;
