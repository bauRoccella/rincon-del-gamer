import React, { useState } from 'react';
import styles from '../styles/BusinessRegister.module.css';
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function BusinessRegister() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', businessName);
    formData.append('email', email);
    formData.append('password', password);
    if (photo) {
      formData.append('file', photo); // Asegúrate de que el backend espera 'file' para la imagen
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/public/businesses/sign-up', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Necesario para manejar archivos
        },
      });

      console.log('Empresa registrada:', response.data);
      setSuccessMessage('Empresa registrada exitosamente.');
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Error al registrar la empresa.');
      } else {
        setErrorMessage('Error en la conexión. Inténtelo más tarde.');
      }
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setPhoto(file);
    setPreviewImage(URL.createObjectURL(file));
  }

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setPhoto(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  }

  function handleRemoveImage() {
    setPhoto(null);
    setPreviewImage(null);
    document.getElementById('photo').value = null; // Resetea el input de archivo
  }

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.registerBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.registerTitle}>Registro de Empresa</h2>
        <p className={styles.registerSubtitle}>Completa los campos con la información requerida</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de la empresa"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className={styles.inputField}
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
            required
          />
          <div
            className={`${styles.dragDropZone} ${dragActive ? styles.active : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {previewImage ? (
              <>
                <img src={previewImage} alt="Preview" className={styles.previewImage} />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className={styles.removeImageButton}
                >
                  &times;
                </button>
              </>
            ) : (
              <p>Arrastra o selecciona una imagen aquí</p>
            )}
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
              required
            />
          </div>
          <button type="submit" className={styles.registerButton}>Registrarse</button>
        </form>
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </div>
    </div>
  );
}
