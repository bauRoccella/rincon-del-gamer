import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/NewPassword.module.css'; // Importando el CSS Module
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';

export default function NewPassword() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/api/v1/sign-in');
  };

  return (
    <div className={styles.newPasswordContainer}>
      <div className={styles.newPasswordBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.newPasswordBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.newPasswordTitle}>Recuperación de contraseña</h2>
        <p className={styles.newPasswordSubtitle}>Complete los campos con la información requerida</p>
        <form>
          <input type="new-password" placeholder="Ingrese la nueva contraseña" className={styles.inputField} required/>
          <input type="new-password-confirm" placeholder="Ingrese la contraseña nuevamente" className={styles.inputField} required/>
          <button type="submit" className={styles.newPasswordButton}>Enviar</button>
        </form>
        <p className={styles.loginLink}>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
      </div>
    </div>
  );
}
