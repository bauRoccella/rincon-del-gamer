import React, { useState } from 'react';
import styles from '../styles/GameSearch.module.css';
import { Star } from 'lucide-react';

export default function GameSearch() {
    const [games, setGames] = useState([
        { id: 1, title: 'Spider-Man Remastered', price: 49.99, image: '/images/spiderman.png', category: 'Acción', system: 'Windows', players: 'Single-Player', language: 'Español', rating: 5 },
        { id: 2, title: 'Resident Evil 3', price: 39.99, image: '/images/resident_evil.png', category: 'Acción', system: 'Windows', players: 'Single-Player', language: 'Inglés', rating: 4 },
        { id: 3, title: 'God of War', price: 59.99, image: '/images/god_of_war.png', category: 'Aventura', system: 'Mac', players: 'Single-Player', language: 'Español', rating: 5 },
        { id: 4, title: 'The Binding of Isaac', price: 19.99, image: '/images/boi.png', category: 'Arcade', system: 'Mac', players: 'Multi-Player', language: 'Inglés', rating: 3 },
        { id: 5, title: 'The Binding of Isaac', price: 99.99, image: '/images/boi.png', category: 'Estrategia', system: 'Windows', players: 'Multi-Player', language: 'Ruso', rating: 2 },
        { id: 6, title: 'The Binding of Isaac', price: 79.99, image: '/images/boi.png', category: 'Simulación', system: 'Mac', players: 'Single-Player', language: 'Francés', rating: 4 },
        { id: 7, title: 'The Binding of Isaac', price: 109.99, image: '/images/boi.png', category: 'Musicales', system: 'Windows', players: 'Multi-Player', language: 'Japonés', rating: 5 },
    ]);

    const [filters, setFilters] = useState({
        category: [],
        system: [],
        players: [],
        language: [],
        rating: [],
        price: '',
    });

    const [appliedFilters, setAppliedFilters] = useState(filters);

    const handleCheckboxChange = (filterType, value) => {
        setFilters((prevFilters) => {
            const currentValues = prevFilters[filterType];
            const newValues = currentValues.includes(value)
                ? currentValues.filter((v) => v !== value)
                : [...currentValues, value];
            return { ...prevFilters, [filterType]: newValues };
        });
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        if (value >= 0 || value === '') {
            setFilters((prevFilters) => ({ ...prevFilters, price: value }));
        }
    };

    const handleApplyFilters = () => {
        setAppliedFilters(filters);
    };

    const filteredGames = games.filter((game) => {
        const { category, price, system, players, language, rating } = appliedFilters;
        return (
            (category.length === 0 || category.includes(game.category)) &&
            (!price || game.price <= parseFloat(price)) &&
            (system.length === 0 || system.includes(game.system)) &&
            (players.length === 0 || players.includes(game.players)) &&
            (language.length === 0 || language.includes(game.language)) &&
            (rating.length === 0 || rating.includes(game.rating))
            );
        }
    );

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h3>Filtros de búsqueda</h3>

                <div className={styles.filterSection}>
                    <h4>Categoría:</h4>
                    {['Acción', 'Aventura', 'Arcade', 'Deportivo', 'Estrategia', 'Simulación', 'Musicales'].map((cat) => (
                        <label key={cat}>
                            <input
                                type="checkbox"
                                name="category"
                                value={cat}
                                checked={filters.category.includes(cat)}
                                onChange={() => handleCheckboxChange('category', cat)}
                            />
                            {cat}
                        </label>
                    ))}
                </div>

                <div className={styles.filterSection}>
                    <h4>Precio:</h4>
                    <input
                        type="number"
                        placeholder="Precio máximo"
                        value={filters.price}
                        onChange={handlePriceChange}
                    />
                </div>

                <div className={styles.filterSection}>
                    <h4>Sistema operativo:</h4>
                    {['Windows', 'Mac'].map((sys) => (
                        <label key={sys}>
                            <input
                                type="checkbox"
                                name="system"
                                value={sys}
                                checked={filters.system.includes(sys)}
                                onChange={() => handleCheckboxChange('system', sys)}
                            />
                            {sys}
                        </label>
                    ))}
                </div>

                <div className={styles.filterSection}>
                    <h4>Idioma:</h4>
                    {['Español', 'Francés', 'Alemán', 'Ruso', 'Inglés', 'Chino', 'Japonés'].map((lang) => (
                        <label key={lang}>
                            <input
                                type="checkbox"
                                name="language"
                                value={lang}
                                checked={filters.language.includes(lang)}
                                onChange={() => handleCheckboxChange('language', lang)}
                            />
                            {lang}
                        </label>
                    ))}
                </div>

                <div className={styles.filterSection}>
                    <h4>Cantidad de jugadores:</h4>
                    {['Single-Player', 'Multi-Player'].map((players) => (
                        <label key={players}>
                            <input
                                type="checkbox"
                                name="players"
                                value={players}
                                checked={filters.players.includes(players)}
                                onChange={() => handleCheckboxChange('players', players)}
                            />
                            {players}
                        </label>
                    ))}
                </div>

                <div className={styles.filterSection}>
                    <h4>Calificación:</h4>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star} className={styles.starRating}>
                            <input
                                type="checkbox"
                                name="rating"
                                value={star}
                                checked={filters.rating.includes(star)}
                                onChange={() => handleCheckboxChange('rating', star)}
                            />
                            {`${star}`} <Star size={16} color="#B57ECD" />
                        </label>
                    ))}
                </div>

                <button className={styles.applyButton} onClick={handleApplyFilters}>
                    Aplicar
                </button>
            </div>

            <div className={styles.gameGrid}>
                {filteredGames.map((game) => (
                    <div key={game.id} className={styles.gameCard}>
                        <img src={game.image} alt={game.title} className={styles.gameImage} />
                        <h3 className={styles.gameTitle}>{game.title}</h3>
                        <p className={styles.gamePrice}>${game.price}</p>
                        <button onClick={() => alert(`Ver detalles de: ${game.title}`)} className={styles.detailsButton}>
                            Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}