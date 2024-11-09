import React, { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, isSelected, onSelect }) => {
    const [isPublished, setIsPublished] = useState(product.isPublished);

    const togglePublish = () => {
        setIsPublished(!isPublished);
    };

    return (
        <div className={`${styles.productCard} ${isSelected ? styles.selected : ''}`}>
            <button 
                className={`${styles.selectBtn} ${isSelected ? styles.selectedBtn : ''}`} 
                onClick={onSelect}
            >
                {/* El círculo blanco se maneja con CSS en el estado seleccionado */}
            </button>
            <h3 className={styles.productTitle}>{product.name}</h3>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <p>Compras: <span>{product.sales}</span></p>
                <p>Visualizaciones: <span>{product.views}</span></p>
                <p>Tasa de Conversión: <span>{product.conversionRate}%</span></p>
                <p>Wishlists: <span>{product.wishlists}</span></p>
            </div>
            <div className={styles.productActions}>
                <button
                    className={`${styles.publishBtn} ${isPublished ? styles.unpublish : ''}`}
                    onClick={togglePublish}
                >
                    {isPublished ? 'Despublicar' : 'Publicar'}
                </button>
                <button className={styles.editBtn}>Editar</button>
            </div>
        </div>
    );
};

export default ProductCard;
