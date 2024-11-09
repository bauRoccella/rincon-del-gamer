import React, { useState } from 'react';
import styles from '../styles/CommentsSectionUser.module.css';
import RatingStars from './RatingStars';

export default function CommentsSectionUser() {
  const currentUser = 'Manupe'; // Usuario actual
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
    {
      id: 4,
      user: 'Manupe',
      rating: 5,
      text: 'Este es mi segundo comentario.',
      avatar: '/images/corner_logo.png',
    },
  ]);

  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(1); // Valor mínimo inicial en 1

  const handleNewComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          user: currentUser,
          rating: newRating,
          text: newComment,
          avatar: '/images/corner_logo.png',
        },
      ]);
      setNewComment('');
      setNewRating(1); // Reset con valor mínimo
    }
  };

  const renderUserName = (user) => {
    if (user === currentUser) {
      return `${user} (Tú)`;
    }
    return user;
  };

  return (
    <div className={styles.container}>
      <h3>Comentarios:</h3>
      <div className={styles.commentForm}>
        <div className={styles.formHeader}>
          <img src="/images/corner_logo.png" alt="Tu avatar" className={styles.avatar} />
          <div className={styles.commentInput}>
            <RatingStars initialRating={newRating} onRatingChange={(rating) => setNewRating(Math.max(rating, 1))} editable={true} />
            <textarea
              placeholder="Escribe tu comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.submitButton} onClick={handleNewComment}>
          Publicar
        </button>
        </div>
      </div>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <img src={comment.avatar} alt={`${comment.user} avatar`} className={styles.avatar} />
            <div className={styles.commentContent}>
              <div className={styles.commentHeader}>
                <h4>{renderUserName(comment.user)}</h4>
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
