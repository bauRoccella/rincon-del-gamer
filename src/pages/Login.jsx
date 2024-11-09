import React, { useEffect, useState } from "react";
import styles from '../styles/Login.module.css';
<<<<<<< Updated upstream
=======
import { jwtDecode } from "jwt-decode"; // Importa jwt-decode
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';
>>>>>>> Stashed changes

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
      const response = await fetch("http://localhost:3000/api/v1/public/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
<<<<<<< Updated upstream
        // Manejar el éxito del login
=======
        const { token } = await response.json(); // Obtenemos el token del JSON de respuesta
        const decodedToken = jwtDecode(token); // Decodificamos el token
        
        console.log("Decoded token:", decodedToken); // Imprime el token decodificado para verificar su estructura
    
        // Obtenemos el rol directamente del token (suponiendo que el token tiene un campo 'role')
        const role = decodedToken.roles; 
    
        console.log("Role from token:", role);
    
        // Compara el rol con los valores esperados
        if (role[0] === 'Business') {
            navigate('/businesses'); // Redirige a la URL de business
        } else if (role[0] === 'User') {
            navigate('/users'); // Redirige a la URL de usuario
        } else if (role[0] === 'Admin') {
            navigate('/admin'); // Redirige a la URL de admin si aplica
        } else {
            console.error("El usuario no tiene un rol válido");
        }
      } else {
        console.error("Login failed");
>>>>>>> Stashed changes
      }
    } catch (error) {
      // Manejar el error del login
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <h2>Iniciar Sesión</h2>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
<<<<<<< Updated upstream
        </div>
        <div className={styles.passwordRecovery}>
          <a href="/password-recovery">Recupero de contraseña</a>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
}
=======
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
>>>>>>> Stashed changes

export default Login;