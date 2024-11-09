import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; // Contexto del usuario
import axios from '../api/axios'; // Configuración de axios
import styles from '../styles/Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../api/axios';

function UserProfile() {
  const { user, setUser } = useContext(AppContext); // Acceder y actualizar el contexto del usuario
  const [avatarUrl, setAvatarUrl] = useState(user.profilePicture || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [picture, setPicture] = useState(null)

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('file', file); // Enviar archivo como FormData

        const response = await axiosInstance.put('/users/profile-picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const updatedUrl = response.data.profilePicture;
        console.log(updatedUrl)

        // Actualizar la URL en el estado y el contexto del usuario
        setAvatarUrl(updatedUrl);
        setUser((prev) => ({ ...prev, profilePicture: updatedUrl }));
      } catch (error) {
        setError('Error al cargar la imagen.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRemoveImage = async () => {
    try {
      await axiosInstance.put('/users/profile-picture', { profilePicture: null }); // Actualiza en backend
      setAvatarUrl(null);
      setUser((prev) => ({ ...prev, profilePicture: null })); // Actualiza el contexto
    } catch (error) {
      setError('Error al eliminar la imagen.');
    }
  };

  if (!user) return <p>Cargando...</p>; // Mostrar mensaje de carga si el usuario aún no está disponible

  return (
    <div className={styles.profileContainer}>
      {/* Sección del Avatar */}
      <div className={styles.avatarSection}>
        <h2 className={styles.name}>{user.username}</h2>
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

      {/* Información del usuario */}
      <div className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>Información Personal</h2>
        <div className={styles.infoBoxes}>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Nombre</label>
            <p className={styles.infoValue}>{user.name}</p>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </div>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Fecha de nacimiento</label>
            <p className={styles.infoValue}>{user.birthDay}</p>
            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
          </div>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Apellido</label>
            <p className={styles.infoValue}>{user.surname}</p>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </div>
          <div className={styles.userInfoBox}>
            <label className={styles.infoLabel}>Correo</label>
            <p className={styles.infoValue}>{user.email}</p>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </div>
        </div>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default UserProfile;
