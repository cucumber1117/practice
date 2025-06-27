import React from 'react'
import{ useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './Level4.module.css'

const Level4=()=>{
  const navigate = useNavigate()

  const front_handleClick = () => {
    navigate('/Level5')
  }

  const back_handleClick = () => {
    navigate('/Level3')
  }

  return (
    <div>
      <Header title="レベル4"/>
        <div className={styles.level4Container}>
        <button className={styles.button1} onClick={back_handleClick}>レベル3へ</button>
          <button className={styles.button}>あ</button>
          <button className={styles.button}>い</button>
          <button className={styles.button}>う</button>
        </div>
    </div>
  )
}

export default Level4