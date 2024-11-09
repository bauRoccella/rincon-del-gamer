import React, { useState } from 'react';
import { Star } from 'lucide-react';
import styles from '../styles/RatingStars.module.css';

export default function RatingStars({ initialRating = 0, onRatingChange, editable = true }) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleMouseEnter = (index) => {
    if (editable) {
      setHoveredRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (editable) {
      setHoveredRating(0);
    }
  };

  const handleClick = (index) => {
    if (editable) {
      const newRating = index + 1;
      setCurrentRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  const getStarFill = (index) => {
    return hoveredRating > 0 ? index < hoveredRating : index < currentRating;
  };

  return (
    <div className={styles.starsContainer}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={24}
          className={getStarFill(index) ? styles.filledStar : styles.emptyStar}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
