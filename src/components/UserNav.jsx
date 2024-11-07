import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import { User } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';

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
          <Search color="black" />
        </Link>
        <Link to="/cart" className={styles.iconButton} aria-label="Cart">
          <ShoppingCart color="black" />
        </Link>
        <Link to="/wishlist" className={styles.iconButton} aria-label="Wishlist">
          <Heart color="black" />
        </Link>
        <Link to="/profile" className={styles.iconButton} aria-label="Profile">
          <User color="black" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
