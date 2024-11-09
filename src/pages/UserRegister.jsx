import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/UserRegister.module.css';
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';

export default function UserRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    nombreUsuario: "",
    fechaNacimiento: "",
    correo: "",
    contrasena: "",
  });

  const postRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/public/users/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const registerJson = await response.json();
        console.log(registerJson);
        setSuccessMessage("Registration successful!");
        navigate('/login');
      } else {
        setErrorMessage("Registration failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred.");
    }
  };
  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(styles.registerPage);
    return () => {
      document.body.classList.remove(styles.registerPage);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await fetch("http://localhost:3000/api/v1/public/users/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const registerJson = await response.json(); 
        console.log(registerJson); 
        setSuccessMessage("Registration successful!");
        navigate('/login');
      } else {
        setErrorMessage("Registration failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.registerBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h1 className={styles.registerTitle}>Registro de Sesión</h1>
        <p className={styles.registerSubtitle}>Completa los campos con la información requerida</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            className={styles.inputField}
            required
          />
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Apellido"
            className={styles.inputField}
            required
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nombre de Usuario"
            className={styles.inputField}
            required
          />
          <input
            type="date"
            name="birthDay"
            value={formData.birthDay}
            onChange={handleChange}
            placeholder="Fecha de Nacimiento"
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo Electrónico"
            className={styles.inputField}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className={styles.inputField}
            required
          />
          <button type="submit" className={styles.registerButton} disabled={loading}>
            {loading ? "Cargando..." : "Registrarse"}
          </button>
        </form>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        <p className={styles.loginLink}>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
      </div>
    </div>
  );
}