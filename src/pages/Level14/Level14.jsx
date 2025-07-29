import React from 'react';
import { useAtomValue } from 'jotai';
import { userInputAtom } from '@/atom/userInputAtom';
import { useInputFieldsStore } from '@/store/inputFieldsStore';
import styles from './Level14.module.css';
import { useNavigate } from 'react-router-dom';

const Level14 = () => {
  const navigate = useNavigate();
  const userInput = useAtomValue(userInputAtom);
  const fields = useInputFieldsStore((state) => state.fields);

  const goToLevel1 = () => {
    navigate('/Level1');
  };

  return (
    <div className={styles.level14Container}>
      <p>Level10で入力した数値群</p>
      <div className={styles.inputList}>
        {fields.length > 0 ? (
          fields.map((value, index) => (
            <div key={index} className={styles.inputItem}>
              {value}
            </div>
          ))
        ) : (
          <div className={styles.noInput}>値がありません</div>
        )}
      </div>

      <button className={styles.bottomButton} onClick={goToLevel1}>
        レベル1へ
      </button>
    </div>
  );
};

export default Level14;
