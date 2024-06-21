import React from "react";
import fullStar from "../assets/img/full-star.svg";
import emptyStar from "../assets/img/empty-star.svg";

const Star = ({ isFilled }) => {
  return (
    <img
      src={isFilled ? fullStar : emptyStar}
      alt={isFilled ? "Full star" : "Empty star"}
    />
  );
};

const Rating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = parseInt(rating);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((star, index) => (
        <Star key={index} isFilled={index < filledStars} />
      ))}
    </div>
  );
};

export default Rating;
