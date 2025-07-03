import React, { useState } from 'react'
import styles from './slideDown.module.css'

const SlideDown = ({ children }) => {
  // 開閉状態を内部で管理(@fix7:Headerの開いているか開いていないかの値の状態もHeade内で管理しておくと良いかも)
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
