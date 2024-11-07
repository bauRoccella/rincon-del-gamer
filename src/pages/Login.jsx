import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(styles.loginPage);
    return () => {
      document.body.classList.remove(styles.loginPage);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Manejar el éxito del login
        navigate('/dashboard'); // Redirigir al dashboard u otra página
      }
    } catch (error) {
      // Manejar el error del login
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    navigate('/role-selection');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.loginBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.loginTitle}>Inicio de Sesión</h2>
        <p className={styles.loginSubtitle}>Por favor, iniciar sesión con los datos abajo</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Correo Electrónico"
            className={styles.inputField}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className={styles.inputField}
            required
          />
          <a href="/forgot-password/email" className={styles.forgotPassword}>¿Olvidó su contraseña?</a>
          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
        <p className={styles.registerLink}>
          Si no tienes una cuenta,{' '}
          <button className={styles.createAccountButton} onClick={handleButtonClick}>
            ¡Créate una!
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;