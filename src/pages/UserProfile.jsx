import React, { useState } from 'react';
import styles from '../styles/Profile.module.css'; // Importando los estilos como CSS Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';

function UserProfile() {
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
        <h2 className={styles.name}>Mardoko</h2>
        <div className={styles.avatarWrapper}>
          {avatarUrl ? (
            <>
              <img
                src={avatarUrl} // Muestra la imagen cargada
                alt="User Avatar"
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
        <h2 className={styles.sectionTitle}>Información Personal</h2>
        <div className={styles.infoBoxes}>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Nombre</label>
            <p className={styles.infoValue}>Maximo</p>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </div>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Fecha de nacimiento</label>
            <p className={styles.infoValue}>dd/mm/yy</p>
            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
          </div>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Apellido</label>
            <p className={styles.infoValue}>Bianchi</p>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </div>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Correo</label>
            <p className={styles.infoValue}>maxbianchi@gmail.com</p>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
