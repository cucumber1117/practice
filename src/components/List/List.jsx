import React from 'react'
import styles from './List.module.css'

const List = ({ names }) => {
  return (
    <ul className={styles['name-list']}>
      {names.map((name, index) => (
        <li key={index} className={styles['name-item']}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default List;
