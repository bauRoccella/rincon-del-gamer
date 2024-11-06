import React, { useState } from 'react';
import styles from '../styles/GameRegistry.module.css';

const GameRegistry = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [coverImage, setCoverImage] = useState(null);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        if (selectedCategories.length < 4 && !selectedCategories.includes(category)) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleRemoveCategory = (categoryToRemove) => {
        setSelectedCategories(selectedCategories.filter(category => category !== categoryToRemove));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h1 className={styles.pageTitle}>Game Registry Page</h1>
            <div className={styles.gameRegistryContainer}>
                <div className={styles.upperSection}>
                    <div className={`${styles.column} ${styles.column1}`}>
                        <h2 className={styles.columnTitle}>Tabla de datos</h2>
                        <input
                            type="text"
                            placeholder="Título"
                            className={styles.inputField}
                        />
                        <textarea
                            placeholder="Descripción"
                            className={styles.textAreaField}
                        />
                        <select className={styles.selectField} onChange={handleCategoryChange}>
                            <option value="" disabled selected hidden>Categorías</option>
                            <option value="categoria1">Categoría 1</option>
                            <option value="categoria2">Categoría 2</option>
                            <option value="categoria3">Categoría 3</option>
                        </select>
                        <div className={styles.selectedCategories}>
                            {selectedCategories.map(category => (
                                <div key={category} className={styles.categoryTag}>
                                    {category}
                                    <span
                                        className={styles.removeCategory}
                                        onClick={() => handleRemoveCategory(category)}
                                    >
                                        &times;
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.languagesContainer}>
                            <h3 className={styles.languagesTitle}>Lenguajes</h3>
                            <div className={styles.languagesContent}>
                                <div className={styles.languageColumn}>
                                    <label>
                                        <input type="checkbox" />
                                        Español
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Inglés
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Italiano
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Portugués
                                    </label>
                                </div>
                                <div className={styles.languageColumn}>
                                    <label>
                                        <input type="checkbox" />
                                        Francés
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Coreano
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Alemán
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Ruso
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.column} ${styles.column2}`}>
                        <h2 className={styles.columnTitle}>Portada</h2>
                        <div
                            className={styles.coverBox}
                            style={{ backgroundImage: `url(${coverImage})` }}
                        ></div>
                        <input
                            type="file"
                            id="imageUpload"
                            className={styles.imageUploadInput}
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="imageUpload" className={styles.uploadButton}>
                            Cargar Imagen
                        </label>
                        <h3 className={styles.priceTitle}>Precio</h3>
                        <div className={styles.priceInputContainer}>
                            <input
                                type="number"
                                min="1"
                                placeholder="Precio"
                                className={styles.priceInput}
                            />
                            <span className={styles.priceCurrency}>ARS</span>
                        </div>
                    </div>
                    <div className={`${styles.column} ${styles.column3}`}>
                        {/* Add your content here */}
                        <p>Column 3 (35%)</p>
                    </div>
                </div>
                <div className={styles.lowerSection}>
                    {/* Add your content here */}
                    <p>This is the lower section that occupies the remaining space.</p>
                </div>
            </div>
        </div>
    );
};

export default GameRegistry;