import React from "react";
import fullStar from "../assets/img/full-star.svg";
import emptyStar from "../assets/img/empty-star.svg";
import PropTypes from "prop-types";

const Star = ({ isFilled }) => {
  return (
    <img
      src={isFilled ? fullStar : emptyStar}
      alt={isFilled ? "Étoile pleine" : "Étoile vide"}
    />
  );
};

Star.propTypes = {
  isFilled: PropTypes.bool.isRequired,
};

const totalStars = 5;

const Rating = ({ rating }) => {
  const filledStars = rating;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} isFilled={index < filledStars} />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
