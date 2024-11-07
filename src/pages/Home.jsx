import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from '../components/Stars.jsx'; // Importa el componente de estrellas
import styles from '../styles/Home.module.css';

const topImages = [
  {
    src: '/images/MyCarousel/balatro.png',
    title: 'Balatro',
    subtitle: 'A thrilling adventure',
    price: '2999,99',
    rating: 4,
  },
  {
    src: '/images/MyCarousel/gow.jpg',
    title: 'God of War',
    subtitle: 'Ragnarok is coming',
    price: '3999,99',
    rating: 5,
  },
  {
    src: '/images/MyCarousel/sekiro.jpg',
    title: 'Sekiro',
    subtitle: 'Shadows Die Twice',
    price: '2499,99',
    rating: 4,
  },
];

const bottomImages = [
  { src: '/images/spiderman.png', title: 'Spider-Man Remastered' },
  { src: '/images/resident_evil.png', title: 'Resident Evil 3' },
  { src: '/images/god_of_war.png', title: 'God of War' },
  { src: '/images/boi.png', title: 'The Binding of Isaac' },
];

function Home() {
  const topCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const bottomCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...topCarouselSettings} className={styles.topCarousel}>
        {topImages.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <div className={styles.leftColumn}>
              <div className={styles.leftColumnContent}>
                <div className={styles.title}>{image.title}</div>
                <div className={styles.subtitle}>{image.subtitle}</div>
                <Stars rating={image.rating} />
                <div className={styles.price}>${image.price}</div>
                <div className={styles.buyButton}>
                  <button>COMPRAR</button>
                </div>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <img src={image.src} alt={image.title} className={styles.carouselImage} />
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...bottomCarouselSettings} className={styles.bottomCarousel}>
        {bottomImages.map((image, index) => (
          <div key={index} className={styles.bottomCarouselItem}>
            <img src={image.src} alt={image.title} className={styles.bottomImage} />
            <h4 className={styles.bottomTitle}>{image.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
