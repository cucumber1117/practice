import React from 'react' 
import { useNavigate } from 'react-router-dom'
import Buttonlist from '@/components/Buttonlist/Buttonlist'
import styles from './Level8.module.css'

const Level8 = () => {
  const navigate = useNavigate();

  const levels1 = [
    { label: 'レベル1へ', path: 'level1' },
    { label: 'レベル2へ', path: 'level2' },
    { label: 'レベル3へ', path: 'level3' },
    { label: 'レベル4へ', path: 'level4' },
    { label: 'レベル5へ', path: 'level5' },
  ];

  const levels2=[
    { label: 'レベル6へ', path: 'level6' },
    { label: 'レベル7へ', path: 'level7' },
    { label: 'レベル8へ', path: 'level8' },
    { label: 'レベル9へ', path: 'level9' },
    { label: 'レベル10へ', path: 'level10' },
  ]

  const levels3=[
    { label: 'レベル11へ', path: 'level11' },
    { label: 'レベル12へ', path: 'level12' },
  ]
  const handleClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className={styles.level8Container}>
      <div className={styles['level-container']}>
        <Buttonlist items={levels1} onClick={handleClick} />
      </div>
      <div className={styles['level-container']}>
        <Buttonlist items={levels2} onClick={handleClick} />
      </div>
      <div className={styles['level-container']}>
        <Buttonlist items={levels3} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Level8;