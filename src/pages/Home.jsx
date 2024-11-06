// Home.jsx
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/home.module.css';

const images = [
  {
    src: '/images/MyCarousel/balatro.png',
    title: 'Balatro',
    subtitle: 'A thrilling adventure'
  },
  {
    src: '/images/MyCarousel/gow.jpg',
    title: 'God of War',
    subtitle: 'Ragnarok is coming'
  },
  {
    src: '/images/MyCarousel/sekiro.jpg',
    title: 'Sekiro',
    subtitle: 'Shadows Die Twice'
  }
];

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return(
    <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <div className={styles.leftColumn}>
              <div className={styles.leftColumnContent}>
                <div className={styles.title}>{image.title}</div>
                <div className={styles.subtitle}>{image.subtitle}</div>
                <div className={styles.blankSpace}>
                  {/* <Stars rating={4} /> */}
                </div>
                <div className={styles.price}>$2999,99</div>
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
  )
}

export default Home;
