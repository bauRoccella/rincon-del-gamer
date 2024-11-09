import React, { useState } from 'react';
import styles from '../styles/BusinessRegister.module.css';
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';

export default function BusinessRegister() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('businessName', businessName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo);

    fetch('/api/v1/businesses/sign-in', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Empresa registrada:', data);
      })
      .catch((error) => {
        console.error('Error al registrar la empresa:', error);
      });
  };

  function handleFileChange(e) {
    const file = e.target.files[0];
    setPhoto(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setPhoto(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  function handleRemoveImage() {
    console.log("Botón de eliminación activado"); // Verifica que se dispara el evento
    setPhoto(null);
    setPreviewImage(null);
    
    // Resetea el valor del input de archivo para permitir seleccionar la misma imagen
    document.getElementById("photo").value = null;
  }
  

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBackground}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.registerBox}>
        <img src={rincondelgamerLogo} alt="Logo" className={styles.logoImage} />
        <h2 className={styles.registerTitle}>Registro de Sesión</h2>
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
                  onClick={handleRemoveImage} // No es necesario el ev
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
        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </div>
    </div>
  );
}
