import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/NewPassword.module.css'; // Importando el CSS Module
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';

export default function NewPassword() {
  const { token } = useParams(); // Captura el token desde la URL
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isValidToken, setIsValidToken] = useState(null); // Controla si el token es válido o no

  // Validar el token al cargar la página
  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/public/forgot-password/${token}`, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });

        if (response.ok) {
          setIsValidToken(true); // Token válido
        } else {
          const data = await response.json();
          setError(data.message || 'Token inválido o expirado.');
          setIsValidToken(false); // Token inválido
        }
      } catch (err) {
        setError('Error al validar el token. Inténtelo más tarde.');
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/v1/public/forgot-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword: password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Contraseña actualizada exitosamente');
        setTimeout(() => navigate('/login'), 3000); // Redirige después de 3 segundos
      } else {
        setError(data.message || 'Error al actualizar la contraseña');
      }
    } catch {
      setError('Error al enviar la solicitud. Inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className={styles.newPasswordContainer}>
      <div className={styles.newPasswordBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.newPasswordBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.newPasswordTitle}>Recuperación de contraseña</h2>

        {isValidToken === null && <p>Validando token...</p>} {/* Mientras valida */}
        {isValidToken === false && <p className={styles.errorMessage}>{error}</p>} {/* Token inválido */}

        {isValidToken && ( /* Mostrar formulario solo si el token es válido */
          <>
            <p className={styles.newPasswordSubtitle}>Ingrese su nueva contraseña</p>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="Nueva contraseña"
                className={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className={styles.inputField}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className={styles.newPasswordButton}>Enviar</button>
            </form>
          </>
        )}

        {message && <p className={styles.successMessage}>{message}</p>}
        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </div>
    </div>
  );
}
