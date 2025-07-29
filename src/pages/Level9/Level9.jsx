import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Level9.module.css';
import SlideDown from '@/components/SlideDown/SlideDown';

const Level9 = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const goToLevel10 = () => {
    navigate('/Level10', { state: { userInput: inputValue } });
  };

  return (
    <div>
      <SlideDown>
        <input
          className={styles.inputField}
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
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
