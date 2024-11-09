import React, { useState, useEffect } from 'react';
import PieChart from '../components/PieChart'; 
import styles from '../styles/CompanyProducts.module.css';

const CompanyProducts = () => {
    const [chartData, setChartData] = useState({ dataValues: [], labels: [] });

    useEffect(() => {
        // Simulación de obtención de datos dinámicos
        const fetchData = async () => {
            const data = [25, 15, 20, 30, 10]; // Datos de ejemplo
            const labels = ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'];
            setChartData({ dataValues: data, labels: labels });
        };

        fetchData();
    }, []);

    return (
        <div className={styles.contentContainer}>
            <h1>Productos de la Empresa</h1>
            <div className={styles.mainContent}>
                <div className={styles.chartSection}>
                    {chartData.dataValues.length > 0 && chartData.labels.length > 0 ? (
                        <PieChart dataValues={chartData.dataValues} labels={chartData.labels} />
                    ) : (
                        <p>Cargando datos del gráfico...</p>
                    )}
                    <div className={styles.chartInfo}>
                        <h3>Compras</h3>
                        <ul>
                            {chartData.labels.map((label, index) => (
                                <li key={index}>
                                    {label} ({chartData.dataValues[index]}%)
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.productsList}>
                    {/* Tarjetas de productos */}
                </div>
            </div>
        </div>
    );
};

export default CompanyProducts;
