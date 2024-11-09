import React, { useState } from 'react';
import styles from '../styles/GameRegistry.module.css';
import Item from '../components/Item';
import OS from '../components/OS';

const GameRegistry = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [coverImage, setCoverImage] = useState(null);
    const [developerImage, setDeveloperImage] = useState(null);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        if (selectedCategories.length < 4 && !selectedCategories.includes(category)) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleRemoveCategory = (categoryToRemove) => {
        setSelectedCategories(selectedCategories.filter(category => category !== categoryToRemove));
    };

    const handleImageUpload = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
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
                        <div className={styles.gameModesContainer}>
                            <h3 className={styles.gameModesTitle}>Modalidad de juego</h3>
                            <label>
                                <input type="checkbox" />
                                Singleplayer
                            </label>
                            <label>
                                <input type="checkbox" />
                                Multiplayer
                            </label>
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
                            id="coverImageUpload"
                            className={styles.imageUploadInput}
                            onChange={(e) => handleImageUpload(e, setCoverImage)}
                        />
                        <label htmlFor="coverImageUpload" className={styles.uploadButton}>
                            Cargar Imagen
                        </label>
                        <h3 className={styles.galleryTitle}>Galería</h3>
                        <div className={styles.galleryBox}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                    <div className={`${styles.column} ${styles.column3}`}>
                        <h2 className={styles.columnTitle}>Foto del desarrollador</h2>
                        <div
                            className={styles.developerBox}
                            style={{ backgroundImage: `url(${developerImage})` }}
                        ></div>
                        <input
                            type="file"
                            id="developerImageUpload"
                            className={styles.imageUploadInput}
                            onChange={(e) => handleImageUpload(e, setDeveloperImage)}
                        />
                        <label htmlFor="developerImageUpload" className={styles.uploadButton}>
                            Cargar Imagen
                        </label>
                        <input
                            type="text"
                            placeholder="Nombre del desarrollador"
                            className={styles.inputField}
                        />
                        <textarea
                            placeholder="Descripción del desarrollador"
                            className={styles.textAreaField}
                        />
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
                </div>
                <div className={styles.lowerSection}>
                    <div className={styles.requirementsColumn}>
                        <h3 className={styles.requirementsTitle}>Requerimientos Mínimos</h3>
                        <OS osName="Windows" />
                        <OS osName="MacOS" />
                        <OS osName="Linux" />
                    </div>
                    <div className={styles.requirementsColumn}>
                        <h3 className={styles.requirementsTitle}>Requerimientos Recomendados</h3>
                        <OS osName="Windows" />
                        <OS osName="MacOS" />
                        <OS osName="Linux" />
                    </div>
                </div>
            </div>
            <div className={styles.termsContainer}>
                <label className={styles.termsLabel}>
                    <input type="checkbox" className={styles.termsCheckbox} />
                    Acepta los términos y condiciones de El Rincón del Gamer
                </label>
                <button className={styles.publishButton}>Publicar</button>
            </div>
        </div>
    );
};

export default GameRegistry;