import React, { useState } from "react";
import '../styles/Register.module.css';
import { useEffect } from "react";

function Register() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    nombreUsuario: "",
    fechaNacimiento: "",
    correo: "",
    contrasena: "",
    logo: null
  });
  
  useEffect(() => {
    document.body.classList.add('register-page');
    return () => {
      document.body.classList.remove('register-page');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
    if (name === "logo" && files.length > 0) {
      setImageUploaded(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("role", role);
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch("/api/register", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccessMessage("Registration successful!");
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
    <div className="content">
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <div className="logo-container">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </div>
          <h2>Registro</h2>
          <p className="subheading">Seleccione su tipo de usuario que utilizará en la aplicación</p>
          <div className="select-container">
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Rol</option>
              <option value="empresa">Empresa</option>
              <option value="usuario">Usuario</option>
            </select>
          </div>
          {role === "usuario" && (
            <>
              <div>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="nombreUsuario"
                  name="nombreUsuario"
                  value={formData.nombreUsuario}
                  onChange={handleChange}
                  placeholder="Nombre de Usuario"
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  placeholder="Fecha de Nacimiento"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  value={formData.contrasena}
                  onChange={handleChange}
                  placeholder="Contraseña"
                  required
                />
              </div>
            </>
          )}
          {role === "empresa" && (
            <>
              <div>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  value={formData.contrasena}
                  onChange={handleChange}
                  placeholder="Contraseña"
                  required
                />
              </div>
              <div>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  onChange={handleChange}
                  required
                />
                {imageUploaded && <span className="check-mark">✔️</span>}
              </div>
            </>
          )}
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Registrarse"}
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <p className="login-text">
            ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;