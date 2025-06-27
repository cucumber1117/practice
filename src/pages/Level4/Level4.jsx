import React from 'react'
import{ useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './Level4.module.css'

const Level4=()=>{
  const navigate = useNavigate()

  const goToLevel5 = () => {
    navigate('/Level5')
  }

  const goToLevel3 = () => {
    navigate('/Level3')
  }

  return (
    <div>
      <Header title="レベル4"/>
      <button className={styles.topButton} onClick={goToLevel3}>レベル3へ</button>
        <div className={styles.level4Container}>
          <button className={styles.centerButton}>あ</button>
          <button className={styles.centerButton}>い</button>
          <button className={styles.centerButton}>う</button>
        </div>
        <button className={styles.bottomLeftButton} onClick={goToLevel5}>レベル5へ</button>
    </div>
  )
}

export default Level4