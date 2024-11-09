import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/RoleSelection.module.css'; // Importando el CSS Module
import background from '/images/fondo-iniciosesion.jpg'; // Imagen de fondo
import rincondelgamerLogo from '/images/logo.png'; // Logo de la página

const RoleSelection = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  // Manejar el cambio de rol seleccionado
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirigir al endpoint correspondiente según el rol seleccionado
    if (role === 'Cliente') {
      navigate('/users/sign-in');
    } else if (role === 'Negocio') {
      navigate('/businesses/sign-in');
    } else {
      alert('Por favor selecciona un rol válido.');
    }
  };

  return (
    <div className={styles.roleSelectionContainer}>
      <div className={styles.roleSelectionBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.roleSelectionBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.roleSelectionTitle}>Registro de Sesión</h2>
        <p className={styles.roleSelectionSubtitle}>Seleccione el tipo de usuario que utilizará en la aplicación</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.selectContainer}>
            <select value={role} onChange={handleRoleChange} className={styles.roleSelect}>
              {role === '' && <option value="">Selecciona tu rol</option>}
              <option value="Cliente">Cliente</option>
              <option value="Negocio">Negocio</option>
            </select>
          </div>

          <button type="submit" className={styles.registerButton}>Registrarse</button>
        </form>

        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;
