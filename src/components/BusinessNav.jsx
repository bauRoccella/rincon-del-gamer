import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import { User } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ChartPie } from 'lucide-react';
import { Search } from 'lucide-react';

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
            <Search color='black' />
        </Link>
        <Link to="/game-registy" className={styles.iconButton} aria-label="Game-Registry">
            <Plus color='black' />
        </Link>
        <Link to="/stats" className={styles.iconButton} aria-label="Stats">
            <ChartPie color='black' />
        </Link>
        <Link to="/profile" className={styles.iconButton} aria-label="Profile">
            <User color='black' />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
