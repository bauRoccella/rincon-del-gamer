import React, { useState } from 'react';
import styles from '../styles/GameOverviewBusiness.module.css';
import Stars from './Stars'; // Componente actualizado para mostrar estrellas con soporte de decimales
import { Heart } from 'lucide-react'; // Icono de corazón

export default function GameOverviewBusiness() {
  const [game, setGame] = useState({
    id: 1,
    title: 'God of War 2018',
    price: '60',
    description:
      'Es un videojuego de acción-aventura en tercera persona desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. La entrega se lanzó exclusivamente para PlayStation 4 en abril de 2018 y posteriormente se portó a Windows en enero de 2022.',
    rating: 4.8, // Rating decimal
    reviews: 19,
    categories: ['Acción', 'Aventura', 'Mundo abierto', 'Violencia', 'Fantasía'],
    developer: {
      name: 'Santa Monica Studio',
      logo: '/images/santamonica.png',
    },
    mainImage: '/images/god_of_war.png',
    images: [
      '/images/fondo-iniciosesion.jpg',
      '/images/resident_evil.png',
      '/images/spiderman.png',
      '/images/god_of_war.png',
    ],
  });

  const handleThumbnailClick = (image) => {
    setGame((prev) => ({ ...prev, mainImage: image }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1>{game.title}</h1>
        <img src={game.mainImage} alt={game.title} className={styles.mainImage} />
        <div className={styles.thumbnailContainer}>
          {game.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.priceContainer}>
          <h2>${game.price} USD</h2>
        </div>
        <div className={styles.descriptionRatingContainer}>
          <h3 className={styles.descriptionTitle}>Descripción:</h3>
          <div className={styles.ratingReviewContainer}>
            <Stars rating={game.rating} />
            <p>({game.reviews})</p>
          </div>
        </div>
        <p>{game.description}</p>
        <div className={styles.categories}>
          {game.categories.map((category, index) => (
            <span key={index} className={styles.category}>{category}</span>
          ))}
        </div>
        <div className={styles.developerInfo}>
          <img src={game.developer.logo} alt={`${game.developer.name} Logo`} className={styles.developerLogo} />
          <p><b>{game.developer.name}</b></p>
        </div>
        <button className={styles.editButton}>Editar</button>
      </div>
    </div>
  );
}
