import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Level13.module.css";

const Level13 = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const navigate = useNavigate();

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("level13Input", inputValue);
    alert("ローカルストレージに保存しました！");
  };

  const handleLoadFromLocalStorage = () => {
    const value = localStorage.getItem("level13Input") || '';
    setStoredValue(value);
  };

  const goToLevel14 = () => {
    navigate("/Level14");
  };

  return (
    <div className={styles.container}>
      <p>ローカルストレージに保存させたい値を入力してください。</p>
      <input
        className={styles.inputField}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="入力欄"
      />
      <button className={styles.button} onClick={handleSaveToLocalStorage}>
        ローカルストレージに保存する
      </button>
      <button className={styles.button} onClick={handleLoadFromLocalStorage}>
        ローカルストレージの値を取得して表示する
      </button>
      {storedValue && <p>保存された値: {storedValue}</p>}
      <button className={styles.nextButton} onClick={goToLevel14}>
        レベル14へ
      </button>
    </div>
  );
};

export default Level13;
