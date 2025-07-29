import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from 'jotai';
import { userInputAtom } from '@/atom/userInputAtom';
import styles from './Level9.module.css'
import SlideDown from '@/components/SlideDown/SlideDown'

const Level9=()=>{
    const [inputValue, setInputValue] = useState("");
    const navigate=useNavigate();
    const setUserInput = useSetAtom(userInputAtom);
    const goToLevel10=()=>{
        setUserInput(inputValue);
        navigate('/Level10');
    };
    return (
        <div>
          <SlideDown>
            <input
              className={styles.inputField}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="入力欄"
            />
          </SlideDown>
          <div className={styles.level9Container}>
            <button className={styles.centerButton} onClick={goToLevel10}>
              レベル10へ
            </button>
          </div>
        </div>
      );
    };   
export default Level9;