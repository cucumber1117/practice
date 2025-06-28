import React from 'react'
import styles from './Footer.module.css'
const Footer = ({ title }) => {
    return (
        <header className={styles.footer}>
            <p>{title}</p>
        </header>
    )
}

export default Footer