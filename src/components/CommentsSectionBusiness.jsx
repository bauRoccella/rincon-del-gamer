import React, { useState } from 'react';
import styles from '../styles/CommentsSectionBusiness.module.css';
import RatingStars from './RatingStars';

export default function CommentsSectionBusiness() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Manuel',
      rating: 5,
      text: 'Increíble juego, lo disfruté de principio a fin.',
      avatar: '/images/corner_logo.png',
    },
    {
      id: 2,
      user: 'Jose',
      rating: 4,
      text: 'Gran historia, aunque podría mejorar el combate.',
      avatar: '/images/corner_logo.png',
    },
    {
      id: 3,
      user: 'Juan',
      rating: 5,
      text: 'Uno de los mejores juegos de la generación.',
      avatar: '/images/corner_logo.png',
    },
  ]);

  return (
    <div className={styles.container}>
      <h3>Comentarios:</h3>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <img src={comment.avatar} alt={`${comment.user} avatar`} className={styles.avatar} />
            <div className={styles.commentContent}>
              <div className={styles.commentHeader}>
                <h4>{comment.user}</h4>
                <RatingStars initialRating={comment.rating} editable={false} />
              </div>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
