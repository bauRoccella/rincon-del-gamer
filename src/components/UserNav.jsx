import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

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
        <Link to="/login" className={styles.loginButton}>Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar;