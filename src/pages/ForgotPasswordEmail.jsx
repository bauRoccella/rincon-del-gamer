import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ForgotPasswordEmail.module.css'; // Importando el CSS Module
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';
import axios from 'axios'; // Importando Axios

export default function ForgotPasswordEmail() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/v1/public/forgot-password/email', { email });

      setMessage(response.data.message); // Mensaje de éxito del backend
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Error al enviar la solicitud.');
      } else {
        setError('Error de conexión. Inténtelo más tarde.');
      }
    }
  };

  return (
    <div className={styles.forgotPasswordEmailContainer}>
      <div className={styles.forgotPasswordEmailBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.forgotPasswordEmailBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.forgotPasswordEmailTitle}>Recuperación de contraseña</h2>
        <p className={styles.forgotPasswordEmailSubtitle}>
          Ingrese su correo electrónico para restablecer la contraseña
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.forgotPasswordEmailButton}>Enviar</button>
        </form>
        {message && <p className={styles.successMessage}>{message}</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </div>
    </div>
  );
}
