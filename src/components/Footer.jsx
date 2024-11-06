import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Contacto</h4>
          <p>Correo: support@rincondelgamer.com</p>
          <p>Teléfono: +54 9 11 3124-0932</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Dirección</h4>
          <p>Av. Achával Rodríguez, Tristán 1402</p>
          <p>Cdad. Autónoma de Buenos Aires, Argentina</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Redes Sociales</h4>
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Rincón del Gamer. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;