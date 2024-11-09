import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import background from "/images/fondo-iniciosesion.jpg";
import rincondelgamerLogo from "/images/logo.png";
import axiosInstance from "../api/axios";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

function Login() {
  const { user, setUser, setToken } = useContext(AppContext);

  const [email, setEmail] = useState("");
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
      const response = await axiosInstance.post("/public/login", {
        email,
        password,
      });

      console.log(
        response.data.user.roles.some((role) => role.name === "User")
      );
      setUser(response.data.user);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      toast.error(
        "Error al iniciar sesión. Por favor, verifique sus credenciales."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    navigate("/role-selection");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBackground}>
        <img
          src={background}
          alt="Background"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.loginBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.loginTitle}>Inicio de Sesión</h2>
        <p className={styles.loginSubtitle}>
          Por favor, iniciar sesión con los datos abajo
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <a href="/forgot-password/email" className={styles.forgotPassword}>
            ¿Olvidó su contraseña?
          </a>
          <button
            type="submit"
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
        <p className={styles.registerLink}>
          Si no tienes una cuenta,{" "}
          <button
            className={styles.createAccountButton}
            onClick={handleButtonClick}
          >
            ¡Créate una!
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
