import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import { AppContext } from "../context/AppContext";
import {
  User,
  Plus,
  ChartPie,
  Search,
  Menu,
  X,
  ShoppingCart,
  Heart,
} from "lucide-react";

function Navbar() {
  const { user } = useContext(AppContext);
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {!user ? (
        <>
          <div className={styles.navbarLeft}>
            <img
              src="/images/corner_logo.png"
              alt="Logo Left"
              className={styles.logoLeft}
            />
          </div>
          <div className={styles.navbarCenter}>
            <img
              src="/images/logo.png"
              alt="Logo Center"
              className={styles.logoCenter}
            />
          </div>
          <div className={styles.navbarRight}>
            <Link to="/login" className={styles.loginButton}>
              Iniciar Sesión
            </Link>
          </div>
        </>
      ) : user.roles.some((role) => role.name === "User") ? (
        <>
          <div className={styles.navbarLeft}>
            <Link to="/">
              <img
                src="/images/corner_logo.png"
                alt="Logo Left"
                className={styles.logoLeft}
              />
            </Link>
          </div>
          <div className={styles.navbarCenter}>
            <img
              src="/images/logo.png"
              alt="Logo Center"
              className={styles.logoCenter}
            />
          </div>
          <div className={styles.navbarRight}>
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
            <div
              className={`${styles.menuIcons} ${
                isMenuOpen ? styles.showMenu : ""
              }`}
            >
              <Link
                to="/products"
                className={styles.iconButton}
                aria-label="Products"
              >
                <Search color="black" />
              </Link>
              <Link to="/cart" className={styles.iconButton} aria-label="Cart">
                <ShoppingCart color="black" />
              </Link>
              <Link
                to="/wishlist"
                className={styles.iconButton}
                aria-label="Wishlist"
              >
                <Heart color="black" />
              </Link>
              <Link
                to="/users/profile"
                className={styles.iconButton}
                aria-label="Profile"
              >
                <User color="black" />
              </Link>
            </div>
          </div>
        </>
      ) : user.roles.some((role) => role.name === "Business") ? (
        <>
          <div className={styles.navbarLeft}>
            <Link to="/">
              <img
                src="/images/corner_logo.png"
                alt="Logo Left"
                className={styles.logoLeft}
              />
            </Link>
          </div>
          <div className={styles.navbarCenter}>
            <img
              src="/images/logo.png"
              alt="Logo Center"
              className={styles.logoCenter}
            />
          </div>
          <div className={styles.navbarRight}>
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
            <div
              className={`${styles.menuIcons} ${
                isMenuOpen ? styles.showMenu : ""
              }`}
            >
              <Link
                to="/businesses/products"
                className={styles.iconButton}
                aria-label="Search"
              >
                <Search />
              </Link>
              <Link
                to="/game-registy"
                className={styles.iconButton}
                aria-label="Game-Registry"
              >
                <Plus />
              </Link>
              <Link
                to="/stats"
                className={styles.iconButton}
                aria-label="Stats"
              >
                <ChartPie />
              </Link>
              <Link
                to="/profile"
                className={styles.iconButton}
                aria-label="Profile"
              >
                <User />
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}

export default Navbar;
