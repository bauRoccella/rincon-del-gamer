import React, { useEffect, useState } from 'react';
import styles from '../styles/SystemRequirements.module.css';

export default function SystemRequirements() {
  const [requirements, setRequirements] = useState(null);

  useEffect(() => {
    // Simulación de la obtención de datos desde el backend
    const fetchRequirements = () => {
      const data = {
        minimum: [
          'Sistema Operativo: Windows 10 64-bit',
          'Procesador: Intel i5-2500K / AMD Ryzen 3 1200',
          'Memoria RAM: 8 GB',
          'Tarjeta gráfica: NVIDIA GTX 960 / AMD R9 290X (4GB)',
          'DirectX: Versión 11',
          'Almacenamiento: 70 GB de espacio disponible',
          'Notas adicionales: DirectX texture level 11.1 required',
        ],
        recommended: [
          'Sistema Operativo: Windows 11 64-bit',
          'Procesador: Intel i5-6600K / AMD Ryzen 5 2400G',
          'Memoria RAM: 16 GB',
          'Tarjeta gráfica: NVIDIA GTX 1080 / AMD RX 570 (4GB)',
          'DirectX: Versión 12',
          'Almacenamiento: 70 GB de espacio disponible',
          'Notas adicionales: DirectX texture level 12 required',
        ],
      };
      setRequirements(data);
    };

    fetchRequirements();
  }, []);

  if (!requirements) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.requirementsSection}>
        <h3>Requisitos mínimos</h3>
        <ul>
          {requirements.minimum.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.requirementsSection}>
        <h3>Requisitos recomendados</h3>
        <ul>
          {requirements.recommended.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
