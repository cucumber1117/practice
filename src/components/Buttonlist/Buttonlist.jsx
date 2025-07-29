import React from 'react';
import styles from './Buttonlist.module.css';

const Buttonlist = ({ items, onClick }) => {
  return (
    <ul className={styles['name-list']}>
      {items.map((item, index) => (
        <li key={index} className={styles['name-item']}>
          <button
            className={styles['name-button']}
            onClick={() => onClick?.(item.path)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Buttonlist;
