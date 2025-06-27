import{ useNavigate } from 'react-router-dom'
import styles from './Level1.module.css'

const Level1=()=>{
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/Level2')
  }

  return (
    <div className={styles.level1Container}>
      <button className={styles.button} onClick={handleClick}>レベル２へ</button>
    </div>
  )
}

export default Level1