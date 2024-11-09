import React, { useState } from 'react';
import styles from '../styles/BusinessRegister.module.css';
import background from '/images/fondo-iniciosesion.jpg';
import rincondelgamerLogo from '/images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function BusinessRegister() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', businessName); // Clave para el nombre de la empresa
    formData.append('email', email);       // Clave para el email
    formData.append('password', password); // Clave para la contraseña

    if (photo) {
        formData.append('file', photo);    // 'file' debe coincidir con el nombre esperado en el backend
    }

    try {
        const response = await fetch('http://localhost:3000/api/v1/public/businesses/sign-up', {
            method: 'POST',
            body: formData, // Enviar los datos como FormData
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Registro exitoso:', data);
            setSuccessMessage('Registro exitoso!');
            navigate('/login');
        } else {
            const errorData = await response.json();
            setErrorMessage(errorData.message || 'Error al registrar el negocio.');
        }
    } catch (error) {
        console.error('Error en el registro:', error);
        setErrorMessage('Ocurrió un error al registrar.');
    }
};


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setPhoto(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setPhoto(null);
    setPreviewImage(null);
    document.getElementById('photo').value = null;
  };

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
              id="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
              required
            />
          </div>
          <button type="submit" className={styles.registerButton} disabled={loading}>
            {loading ? 'Cargando...' : 'Registrarse'}
          </button>
        </form>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </div>
    </div>
  );
}
