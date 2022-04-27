import React from "react";
import styles from "../../styles/TitleCard.module.css";
import { BsCircle } from 'react-icons/bs';

const TitleCard = ({Title , toggleOpen}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideBox}>
      <div className={styles.icon}><BsCircle /></div>
        <div className={styles.title}>{Title}</div>
      </div>
        <div className={styles.rightSideBox}>
        <button className={styles.button} onClick={()=>toggleOpen()}>...</button>
      </div>
    </div>
  );
};

export default TitleCard;
