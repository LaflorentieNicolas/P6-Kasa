import React, { useState } from "react";
import PropTypes from "prop-types";
import arrowLeft from "../assets/img/arrow-left.png";
import arrowRight from "../assets/img/arrow-right.png";
import "../sass/main.scss";

function Carrousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <button
          className="carrousel__button carrousel__button--left"
          onClick={goToPrevious}
        >
          <img src={arrowLeft} alt="flèche gauche" />
        </button>
      )}
      <div
        className="carrousel__image-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <img
            key={index}
            className="carrousel__image"
            src={picture}
            alt={`${title} ${index + 1}`}
          />
        ))}
      </div>
      {pictures.length > 1 && (
        <button
          className="carrousel__button carrousel__button--right"
          onClick={goToNext}
        >
          <img src={arrowRight} alt="flèche droite" />
        </button>
      )}
      {pictures.length > 1 && (
        <div className="carrousel__counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carrousel;
