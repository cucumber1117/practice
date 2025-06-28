import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header/Header'
import styles from './Level4.module.css'

const Level4 = () => {
  const navigate = useNavigate()

  const goToLevel5 = () => {
    navigate('/Level5')
  }

  const goToLevel3 = () => {
    navigate('/Level3')
  }

  //@fix:列挙して並べる際は下記のようにまとめておいてのちのち.mapで表示させるのが一般的
  const List = ['あ', 'い', 'う']

  return (
   <div className={styles.wrapper}>  {/* この<div>で全体をラップ */}
  <Header title="レベル4" />
  
  <button className={styles.topButton} onClick={goToLevel3}>
    レベル3へ
  </button>

  {/*:一覧を表示させる際は.mapを活用すると考えてくれればと思う
  .mapはリストなどの変数入った複数の値を一覧として表示させる際によく活用される*/}
  {/*※ボタンの列挙はレベル8の画面構築方でやってもらおうと考えているため
  現段階では表示させるだけでOK。*/}
  <div className={styles.level4Container}>
    {List.map((item, index) => (
      <p key={index} className={styles.centerText}>
        {item}
      </p>
    ))}
  </div>

  <button className={styles.bottomLeftButton} onClick={goToLevel5}>
    レベル5へ
  </button>
  

</div>
  )
}

export default Level4
