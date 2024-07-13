import React from 'react';
import styles from './Display.module.css';
const Display = ({calVal}) => {
return(
    <input className={styles.display} type='text' value={calVal} readOnly/>
);
};
export default Display;