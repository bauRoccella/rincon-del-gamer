import React, { useState } from 'react';
import styles from '../styles/Wishlist.module.css';
import { Heart } from 'lucide-react';

export default function Wishlist() {
    const [games, setGames] = useState([
        {
            id: 1,
            title: 'Ratchet & Clank',
            image: '/images/logo.png',
        },
        {
            id: 2,
            title: 'The Last of Us',
            image: '/images/corner_logo.png',
        },
        {
            id: 3,
            title: 'Horizon Zero Dawn',
            image: '/images/logo.png',
        },
        {
            id: 4,
            title: 'Spider-Man',
            image: '/images/logo.png',
        },
    ]);

    const handleAddToCart = (game) => {
        alert(`Añadido al carrito: ${game.title}`);
    };

    const handleRemove = (game) => {
        setGames(games.filter((g) => g.id !== game.id));
    };

    return (
        <div className={styles.wishlistContainer}>
            <h2 className={styles.title}>
                Wishlist <Heart color='#F670C8' size="26px" />
            </h2>

            {games.length === 0 ? (
                <p className={styles.emptyMessage}>No tienes juegos en tu wishlist. ¡Agrega algunos para verlos aquí!</p>
            ) : (
                <div className={styles.grid}>
                    {games.map((game) => (
                        <div key={game.id} className={styles.card}>
                            <img src={game.image} alt={game.title} className={styles.image} />
                            <div className={styles.gameInfo}>
                                <h3 className={styles.gameTitle}>{game.title}</h3>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.details}> Ver más Detalles </button>
                                <button onClick={() => handleAddToCart(game)} className={styles.addToCart}> Añadir al Carrito </button>
                                <button onClick={() => handleRemove(game)} className={styles.remove}> Quitar </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
