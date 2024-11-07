import React, { useState } from "react";
import styles from "../styles/PaymentMethod.module.css";

function PaymentMethod() {
  const [cardType, setCardType] = useState("credito");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveData, setSaveData] = useState(false);

  const handleCardTypeChange = (type) => {
    setCardType(type);
  };

  const handleSave = () => {
    // Lógica para guardar los datos
    console.log("Datos guardados:", { cardType, cardNumber, expiryDate, cvv, saveData });
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}\/?\d{0,2}$/.test(value)) {
      setExpiryDate(value);
    }
  };

  return (
    <div className={styles.paymentContainer}>
      <h1>Método de Pago</h1>
      <form>
        <div className={styles.cardType}>
          <label>
            <input
              type="radio"
              name="cardType"
              value="credito"
              checked={cardType === "credito"}
              onChange={() => handleCardTypeChange("credito")}
            />
            Crédito
          </label>
          <label>
            <input
              type="radio"
              name="cardType"
              value="debito"
              checked={cardType === "debito"}
              onChange={() => handleCardTypeChange("debito")}
            />
            Débito
          </label>
        </div>
        <div className={styles.cardDetails}>
          <label>Número de Tarjeta</label>
          <input
            type="number"
            min="0"
            placeholder="1234 5678 9105 4121"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <label>Fecha de Vencimiento</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            required
          />
          <label>CVV</label>
          <input
            type="number"
            min="0"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div className={styles.saveInfo}>
          <input
            type="checkbox"
            checked={saveData}
            onChange={() => setSaveData(!saveData)}
          />
          <label>Guardar datos</label>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={handleSave}>
            Pagar
          </button>
        </div>
      </form>
      <p className={styles.policyText}>
        Sus datos personales se utilizarán para procesar su pedido, respaldar su experiencia en este sitio web y para otros fines descritos en nuestra política de privacidad.
      </p>
    </div>
  );
}

export default PaymentMethod;
