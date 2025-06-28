import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './Level5.module.css'

const Level5 = () => {
  const navigate = useNavigate()

  const goToLevel6 = () => {
    navigate('/Level6')
  }

  const goToLevel4 = () => {
    navigate('/Level4')
  }

  //@fix:列挙して並べる際は下記のようにまとめておいてのちのち.mapで表示させるのが一般的
  const List = ['あ', 'い', 'う']
  const List2 = ['え','お','か']

  return (
   <div>
  <Header title="レベル5" />
  
  <button className={styles.topButton} onClick={goToLevel4}>
    レベル4へ
  </button>

  <div className={styles.level5Container}>
    <div className={styles.column}>
        {List.map((item, index) => (
            <p key={index} className={styles.centerText}>
                {item}
            </p>
        ))}
    </div>
    <div className={styles.column}>
        {List2.map((item, index) => (
            <p key={index} className={styles.centerText}>
                {item}
            </p>
        ))}
    </div>
  </div>

  <button className={styles.bottomLeftButton} onClick={goToLevel6}>
    レベル6へ
  </button>
  
  <Footer title="レベル5" />
</div>
  )
}

export default Level5