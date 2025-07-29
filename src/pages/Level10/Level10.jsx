import React, { useState } from "react";
import { useAtomValue } from 'jotai';
import { userInputAtom } from '@/atom/userInputAtom';
import { useNavigate } from "react-router-dom";
import styles from './Level10.module.css'

const Level10=()=>{
    const userInput = useAtomValue(userInputAtom);
    const [inputValue, setInputValue] = useState('');
    const navigate=useNavigate();
    const goToLevel11=()=>{
        navigate('/Level11')
    }

    return (
        <div>
            <p>前の画面からの入力<br />{userInput}</p>
            <div className={styles.level10Container}>
            <input
              className={styles.inputField}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="入力欄"
            />
            <button className={styles.centerButton} onClick={goToLevel11}>
                レベル11へ
            </button>
            </div>
        </div>
    );
};
export default Level10;