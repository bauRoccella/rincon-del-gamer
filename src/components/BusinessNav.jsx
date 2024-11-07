import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src="/images/corner_logo.png" alt="Logo Left" className={styles.logoLeft} />
      </div>
      <div className={styles.navbarCenter}>
        <img src="/images/logo.png" alt="Logo Center" className={styles.logoCenter} />
      </div>
      <div className={styles.navbarRight}>
        <Link to="/search" className={styles.iconButton} aria-label="Search">
            <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to="/game-registy" className={styles.iconButton} aria-label="Game-Registry">
            <FontAwesomeIcon icon={faPlus} />
        </Link>
        <Link to="/stats" className={styles.iconButton} aria-label="Stats">
            <FontAwesomeIcon icon={faChartSimple} />
        </Link>
        <Link to="/profile" className={styles.iconButton} aria-label="Profile">
            <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
