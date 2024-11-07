import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to="/">
          <img src="/images/corner_logo.png" alt="Logo Left" className={styles.logoLeft} />
        </Link>
      </div>
      <div className={styles.navbarCenter}>
        <img src="/images/logo.png" alt="Logo Center" className={styles.logoCenter} />
      </div>
      <div className={styles.navbarRight}>
        <Link to="/products" className={styles.iconButton} aria-label="Products">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to="/cart" className={styles.iconButton} aria-label="Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Link to="/wishlist" className={styles.iconButton} aria-label="Wishlist">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/profile" className={styles.iconButton} aria-label="Profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
