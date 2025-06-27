import React from 'react'
import{ useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './Level3.module.css'

const Level3=()=>{
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/Level4')
  }

  return (
    <div>
      <Header title="レベル３"/>
        <div className={styles.level3Container}>
          <button className={styles.button} onClick={handleClick}>レベル4へ</button>
        </div>
    </div>
  )
}

export default Level3