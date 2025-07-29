import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetAtom, useAtomValue } from "jotai";
import { userInputAtom } from "@/atom/userInputAtom";
import styles from './Level10.module.css';

const Level10 = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const userInputFromLevel9 = location.state?.userInput || '';


  const [inputValue, setInputValue] = useState('');
  const setUserInput = useSetAtom(userInputAtom);

  useEffect(() => {
    setUserInput(inputValue);
  }, [inputValue, setUserInput]);

  const goToLevel11 = () => {
    navigate('/Level11');
  };

  return (
    <div>
      <p>レベル9からの入力: {userInputFromLevel9}</p>
      <div className={styles.level10Container}>
        <input
          className={styles.inputField}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="レベル10の入力欄"
        />
        <button className={styles.centerButton} onClick={goToLevel11}>
          レベル11へ
        </button>
      </div>
    </div>
  );
};

export default Level10;
