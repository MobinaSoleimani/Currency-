import React from 'react';
import styles from './Loader.module.css';

// Gif
import spinner from "../gif/spinner.gif"

const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt="Loading" />

        </div>
    );
};

export default Loader;