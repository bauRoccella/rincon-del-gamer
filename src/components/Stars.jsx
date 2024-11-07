import React from 'react';
import { Star } from 'lucide-react';
import styles from '../styles/Stars.module.css';

export default function Stars({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.starsContainer}>
      {stars.map((star, index) => (
        <Star
          key={index}
          size={20}
          className={index < rating ? styles.filledStar : styles.emptyStar}
        />
      ))}
    </div>
  );
}