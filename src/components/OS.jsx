import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/OS.module.css';

const OS = ({ osName }) => {
    return (
        <div className={styles.osContainer}>
            <h4 className={styles.osTitle}>{osName}</h4>
            <input type="text" placeholder="Sistema Operativo" className={styles.inputField} />
            <input type="text" placeholder="Procesador" className={styles.inputField} />
            <input type="text" placeholder="Memoria" className={styles.inputField} />
            <input type="text" placeholder="Graficas" className={styles.inputField} />
            <input type="text" placeholder="Almacenamiento" className={styles.inputField} />
        </div>
    );
};

OS.propTypes = {
    osName: PropTypes.string.isRequired,
};

export default OS;