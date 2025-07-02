import React, { useState } from 'react'
import styles from './slideDown.module.css'

const SlideDown=({ children })=>{
    const [show,setShow] = useState(false)

    const toggleShow = () => setShow(prev => !prev)

    return (
        <>
          <button className={styles.toggleButton} onClick={toggleShow}>
            {show ? '閉じる' : '表示'}
          </button>
    
          <div className={`${styles.slideDown} ${show ? styles.show : ''}`}>
            {children}
          </div>
        </>
      )
    }
    export default SlideDown