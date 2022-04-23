import React from "react";
import InfoCard from "./InfoCard";
import styles from "../../styles/CardContainer.module.css";

const CardContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.Title}>Title</h3>
        <button className={styles.button}>+</button>
      </div>
<div className={styles.infoCards}></div>
       <InfoCard />   
        <InfoCard /> 


        <div className={styles.addCart}>
            + Add a Cart
        </div>
    </div>
  );
};

export default CardContainer;
