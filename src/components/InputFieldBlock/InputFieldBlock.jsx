import React from 'react';
import { useInputFieldsStore } from '@/store/inputFieldsStore';
import styles from './InputFieldBlock.module.css';

const InputFieldBlock = ({ index, value }) => {
  const updateField = useInputFieldsStore((state) => state.updateField);
  const removeField = useInputFieldsStore((state) => state.removeField);

  return (
    <div className={styles.inputBlock}>
      <input
        type="text"
        value={value}
        onChange={(e) => updateField(index, e.target.value)}
        className={styles.inputField}
      />
      <button onClick={() => removeField(index)} className={styles.deleteButton}>
        削除
      </button>
    </div>
  );
};

export default InputFieldBlock;
