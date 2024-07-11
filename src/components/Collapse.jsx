import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../assets/img/arrow-up-down.svg";
import "../sass/main.scss";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse_container">
      <div className="collapse" onClick={toggleCollapse}>
        <div className="collapse__title">{title}</div>
        <button>
          <img
            className={`collapse__arrow ${isOpen ? "rotate" : ""}`}
            src={arrow}
            alt="Ouvrir le texte"
          />
        </button>
      </div>
      <div className={`collapse__description ${isOpen ? "show" : ""}`}>
        {description}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default Collapse;
