import React from 'react'
import styles from './Header.module.css'
//fix@:一般的にはHeaderコンポーネントを作成する際は。
//componentsフォルダの中にHeaderフォルダを作成し。その中に
//Header.jsxとHeader.module.cssをセットで入れることが一般的
const Header = ({ title }) => {
    return (
        <header className={styles.header}>
            <p>{title}</p>
        </header>
    )
}

export default Header