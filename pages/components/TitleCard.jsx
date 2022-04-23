import React from "react";
import styles from "../../styles/TitleCard.module.css";
import { BsCircle } from 'react-icons/bs';

const TitleCard = ({Title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideBox}>
      <div className={styles.icon}><BsCircle /></div>
        <div className={styles.title}>{Title}</div>
      </div>
        <div classNam={styles.rightSideBox}>
        <button className={styles.button}>...</button>
      </div>
    </div>
  );
};

export default TitleCard;
