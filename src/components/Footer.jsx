import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "/images/logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Columna de Suscripción */}
        <div className={`${styles.footerSection} ${styles.footerSubscription}`}>
          <p>Suscribite para obtener más alertas sobre los juegos publicados. Prometemos no spamear tu inbox.</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Email" />
            <button type="submit">SUSCRIBITE</button>
          </form>
        </div>
        
        {/* Columna del Logo */}
        <div className={`${styles.footerSection} ${styles.footerLogo}`}>
          <img src={logo} alt="Logo Rincón del Gamer" style={{ width: '200px' }} />
          <p>Buenos Aires, Argentina</p>
        </div>
        
        {/* Columna de Contacto */}
        <div className={`${styles.footerSection} ${styles.footerContact}`}>
          <h4>Número de Soporte</h4>
          <p className={styles.contactNumber}>+54 9 11 3124-0932</p>
          <p>Av. Achával Rodríguez, Tristán 1402</p>
          <p>Cdad. Autónoma de Buenos Aires</p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2024 Rincón del Gamer. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
