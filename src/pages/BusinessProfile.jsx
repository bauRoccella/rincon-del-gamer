import React, { useState } from 'react';
import styles from '../styles/Profile.module.css'; // Importando los estilos como CSS Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';

function BusinessProfile() {
  // Estado para la imagen del avatar
  const [avatarUrl, setAvatarUrl] = useState(null);

  // Función para manejar la carga de imagen
  const handleImageUpload = (event) => { 
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarUrl(reader.result); // Actualiza la URL con la imagen seleccionada
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para eliminar la imagen y restaurar el área vacía
  const handleRemoveImage = () => {
    setAvatarUrl(null);
  };

  return (
    <div className={styles.profileContainer}>
      {/* Sección del Avatar */}
      <div className={styles.avatarSection}>
        <h2 className={styles.name}>Sony</h2>
        <div className={styles.avatarWrapper}>
          {avatarUrl ? (
            <>
              <img
                src={avatarUrl} // Muestra la imagen cargada
                alt="Business Avatar"
                className={styles.avatar}
              />
              {/* Botón para eliminar la imagen */}
              <button onClick={handleRemoveImage} className={styles.removeButton}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </>
          ) : (
            // Área para arrastrar y soltar o seleccionar imagen
            <label className={styles.uploadLabel}>
              Haz click para subir una imagen
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className={styles.uploadInput}
              />
            </label>
          )}
        </div>
        
        <button className={styles.logoutButton}>Cerrar Sesión</button>
      </div>

      {/* Barra de separación vertical */}
      <div className={styles.verticalBar}></div>

      {/* Sección de Información Personal */}
      <div className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>Información Empresarial</h2>
        <div className={styles.infoBoxes}>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Empresa</label>
            <p className={styles.infoValue}>Sony entertaiment</p>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </div>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Correo</label>
            <p className={styles.infoValue}>sony@sony.com</p>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessProfile;
