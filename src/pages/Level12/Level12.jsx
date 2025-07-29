import React, { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { userInputAtom } from '@/atom/userInputAtom';
import { useInputFieldsStore } from '@/store/inputFieldsStore';
import InputFieldBlock from '@/components/InputFieldBlock/InputFieldBlock';
import styles from './Level12.module.css';
import { useNavigate } from 'react-router-dom';

const Level12 = () => {
  const navigate = useNavigate();
  const userInput = useAtomValue(userInputAtom);
  const { fields, addField, updateField, removeField, setFields } = useInputFieldsStore();

  useEffect(() => {
    if (userInput && fields.length === 1 && fields[0] === '') {
      setFields([userInput]);
    }
  }, [userInput, fields, setFields]);

  const goToLevel13 = () => {
    navigate('/Level13');
  };

  return (
    <div className={styles.level12Container}>
      <p>Level10で入力した値<br />{userInput}</p>

      <button className={styles.addButton} onClick={addField}>
        入力欄追加
      </button>

      <div className={styles.scrollContainer}>
        {fields.map((value, index) => (
          <InputFieldBlock key={index} index={index} value={value} />
        ))}
      </div>

      <button className={styles.bottomButton} onClick={goToLevel13}>
        レベル13へ
      </button>
    </div>
  );
};

export default Level12;
