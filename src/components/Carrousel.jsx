import React, { useState } from "react";
import PropTypes from "prop-types";
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
      <button
        className="carrousel__button carrousel__button--left"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <div className="carrousel__image-container">
        <img
          className="carrousel__image"
          src={pictures[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
        />
      </div>
      <button
        className="carrousel__button carrousel__button--right"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carrousel;
