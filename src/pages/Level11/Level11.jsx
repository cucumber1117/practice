import React from "react";
import { useNavigate } from "react-router-dom";
import useTimer from "@/hooks/useTimer";
import styles from './Level11.module.css'; 

const Level11=()=>{
    const seconds = useTimer();
    const navigate=useNavigate();
    const goToLevel12=()=>{
        navigate('/Level12')
    }

    return (
        <div className={styles.level11Container}>
            <p>このページを開いてから{seconds}秒経過しました。</p>
            <button className={styles.centerButton} onClick={goToLevel12}>
                レベル12へ
            </button>
        </div>
    );
};
export default Level11;