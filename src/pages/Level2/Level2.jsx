import{ useNavigate } from 'react-router-dom'
import styles from './Level2.module.css'

const Level2=()=>{
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/Level3')
  }

  return (
    <div className={styles.level2Container}>
      <button className={styles.button} onClick={handleClick}>レベル3へ</button>
      <button className={styles.button} onClick={handleClick}>レベル３へ</button>
    </div>
  )
}

export default Level2