import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import Footer from '@/components/Footer/Footer'
import List from '@/components/List/List'
import styles from './Level7.module.css'
import SlideDown from '@/components/SlideDown/SlideDown'

const Level7 = () => {
    const navigate = useNavigate()

    const goToLevel8 = () => {
        navigate('/Level8')
      }
    const [showSlide, setShowSlide] = useState(false)
    const toggleSlide = () => setShowSlide(prev => !prev)

    const List1 = ['A', 'B', 'C']
    const List2 = ['D', 'E', 'F']
    
    return (
        <div>
            <SlideDown show={showSlide}>
                <div className={styles.row}>
                <List names={List1} />
                <List names={List2} />
                </div>
            </SlideDown>
            <button className={styles.Button} onClick={goToLevel8}>
                    レベル8へ
            </button>
            <Footer title="レベル6" />
        </div>
      )
}
export default Level7