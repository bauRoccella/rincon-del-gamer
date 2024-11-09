import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import { User, Heart, ShoppingCart, Search, Menu, X } from 'lucide-react';

function UserNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <div className={`${styles.menuIcons} ${isMenuOpen ? styles.showMenu : ''}`}>
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
      </div>
    </nav>
  );
}

export default UserNavbar;
