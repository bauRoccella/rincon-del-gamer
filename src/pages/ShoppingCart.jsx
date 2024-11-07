import React, { useState } from 'react';
import styles from '../styles/ShoppingCart.module.css';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react'
import { Check } from 'lucide-react';

function ShoppingCart() {
  const navigate = useNavigate();

  // Estado inicial del carrito
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "God of War", price: 59.99, image: "/images/god_of_war.png" },
    { id: 2, title: "The Binding of Isaac", price: 13.99, image: "/images/boi.png" },
    { id: 3, title: "God of War II", price: 50.0, image: "/images/god_of_war.png" },
    { id: 4, title: "Ratchet & Clank", price: 79.98, image: "/images/resident_evil.png" },
  ]);

  // Calcular subtotal y total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal * 1.21; // Suponiendo un 21% de IVA

  // Función para eliminar un juego específico del carrito
  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Función para borrar todo el carrito
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Redireccionar a "/products" para seguir comprando
  const handleContinueShopping = () => {
    navigate('/products');
  };

  // Redireccionar a "/payment-method" para proceder con el pago
  const handleProceedToPayment = () => {
    navigate('/pay');
  };

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <h2>Carrito:</h2>
        
        {/* Mostrar mensaje si el carrito está vacío */}
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <div className={styles.cartHeader}>
              <span className={styles.headerTitle}>Juegos</span>
              <span className={styles.headerPrice}>Precio</span>
              <span></span> {/* Espacio para el ícono de eliminar */}
            </div>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.itemImage} />
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
                <button className={styles.deleteButton} onClick={() => handleDeleteItem(item.id)}>
                  <Trash2 color='black' />
                </button>
              </div>
            ))}
            <div className={styles.cartButtons}>
              <button className={styles.continueButton} onClick={handleContinueShopping}>
                Seguir Comprando
              </button>
              <button className={styles.clearButton} onClick={handleClearCart}>
                Borrar Carrito
              </button>
            </div>
          </>
        )}
      </div>

      <div className={styles.details}>
        <h3>Detalle</h3>
        <div className={styles.detailItem}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.detailItem}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className={styles.taxInfo}>
          <small><Check color='#32C770' size="14px"/> Impuesto e IVA incluidos</small>
        </div>
        {cartItems.length > 0 && (
          <button className={styles.payButton} onClick={handleProceedToPayment}>
            Proceder con el pago
          </button>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
