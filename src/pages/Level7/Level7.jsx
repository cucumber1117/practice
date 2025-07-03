import React from 'react' 
import { useNavigate } from 'react-router-dom'
import Footer from '@/components/Footer/Footer'
import List from '@/components/List/List'
import styles from './Level7.module.css'
import SlideDown from '@/components/SlideDown/SlideDown'
import exampleImage from '@/assets/images/Camera.png'//@fix7:基本的には画像はassetsフォルダ内にimagesフォルダを作成してその中に保存することが多いい。

const Level7 = () => {
    const navigate = useNavigate()

    const goToLevel8 = () => {
        navigate('/Level8')
    }

    const List1 = ['A', 'B', 'C']
    const List2 = ['D', 'E', 'F']
    
    return (
        <div>
            <SlideDown>
                <div className={styles.row}>
                    <List names={List1} />
                    <List names={List2} />
                </div>
            </SlideDown>
            <div className={styles.buttonContainer}>
                <button className={styles.Button} onClick={goToLevel8}>
                    レベル8へ
                </button>
                {/*@fix7:で画像を表示*/}
                <img src={exampleImage} alt="説明テキスト" className={styles.roundImage} />
            </div>
            <Footer title="レベル7" />
        </div>
    )
}
export default Level7
