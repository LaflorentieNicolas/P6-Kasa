import React from "react";
import fullStar from "../assets/img/full-star.svg";
import emptyStar from "../assets/img/empty-star.svg";
import PropTypes from "prop-types";

const Star = ({ isFilled }) => {
  return (
    <img
      src={isFilled ? fullStar : emptyStar}
      alt={isFilled ? "Full star" : "Empty star"}
    />
  );
};

Star.propTypes = {
  isFilled: PropTypes.bool.isRequired,
};

const Rating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = parseInt(rating, 10);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((star, index) => (
        <Star key={index} isFilled={index < filledStars} />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
