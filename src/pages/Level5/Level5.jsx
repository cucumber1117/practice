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

  //@fix5:最初の将臣の書き方でも全く問題なくOKではあるが一応
  //2次元リスト的なやり方もあることだけ知っておいてほしいためそのやり方に変更しておいた
  //(※最初の書き方でも今回の場合特に問題ないため実際は好きな方を選んでくれればと思う)
  const groupedLists = [
    ['あ', 'い', 'う'],
    ['え', 'お', 'か'],
  ]


  return (
    <div>
      <Header title="レベル5" />
      
      <button className={styles.topButton} onClick={goToLevel4}>
        レベル4へ
      </button>

      {/*:２重.mapで表示することで2次元リストを並べる。
      (※ちなみにこの書き方はレベル6以降では多分使わないためこういう書き方があることだけ知ってくれればと思う)*/}
      <div className={styles.level5Container}>
        {groupedLists.map((list, columnIndex) => (
          <div key={columnIndex} className={styles.column}>
            {list.map((item, itemIndex) => (
              <p key={itemIndex} className={styles.centerText}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      <button className={styles.bottomRightButton} onClick={goToLevel6}>
        レベル6へ
      </button>
      
      <Footer title="レベル5" />
    </div>
  )
}

export default Level5