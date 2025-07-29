import React, { useState } from 'react'
import styles from './slideDown.module.css'

const SlideDown = ({ children }) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(prev => !prev)

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.slideDown} ${show ? styles.show : ''}`}>
        {children}
      </div>
      <button className={styles.toggleButton} onClick={toggleShow}>
        {show ? '閉じる' : '表示'}
      </button>
    </div>
  )
}

export default SlideDown
