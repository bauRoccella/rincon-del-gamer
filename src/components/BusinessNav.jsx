import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import { User, Plus, ChartPie, Search, Menu, X } from 'lucide-react';

function BusinessNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        {/* Botón del menú hamburguesa */}
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        
        {/* Iconos visibles en pantallas grandes */}
        <div className={`${styles.menuIcons} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link to="/products" className={styles.iconButton} aria-label="Search">
            <Search />
          </Link>
          <Link to="/game-registy" className={styles.iconButton} aria-label="Game-Registry">
            <Plus />
          </Link>
          <Link to="/stats" className={styles.iconButton} aria-label="Stats">
            <ChartPie />
          </Link>
          <Link to="/profile" className={styles.iconButton} aria-label="Profile">
            <User />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default BusinessNavbar;
