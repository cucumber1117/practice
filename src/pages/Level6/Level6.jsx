import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import List from '@/components/List/List'
import styles from './Level6.module.css'

const Level6 = () => {
  const navigate = useNavigate()

  const goToLevel7 = () => {
    navigate('/Level7')
  }

  const goToLevel5 = () => {
    navigate('/Level5')
  }

  const List1=['あ','い']
  const List2=['ま','み','む','め']
  const List3=['1個','2個','3個']
  const List4=['A','B','C']


  return (
    <div>
      <Header title="レベル6" />
      <div className={styles.topButton}>
      <button className={styles.Button} onClick={goToLevel5}>
        レベル5へ
      </button>
      <button className={styles.Button} onClick={goToLevel7}>
        レベル7へ
      </button>
      </div>
      <div className={styles.level6Container}>
      <div className={styles.column}>
        <List names={List1} />
        <List names={List2} />
        </div>
        <div className={styles.column}>
        <List names={List3} />
        <List names={List4} />
        </div>
      </div>
      
      <Footer title="レベル6" />
    </div>
  )
}

export default Level6