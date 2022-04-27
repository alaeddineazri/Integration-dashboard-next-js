import React from "react";
import styles from "../../styles/CardContainer.module.css";
import InfoCard from "./InfoCard";
import { Droppable } from "react-beautiful-dnd";

const CardContainer = ({ column, tasks }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.Title}>Title</h3>
        <button className={styles.button}>+</button>
      </div>
      <div className={styles.infoCards}>
        {tasks? 
        <Droppable droppableId={column.id}>
          {(provider) => (
            <div {...provider.droppableProps} ref={provider.innerRef}>
              {tasks.map((task ,index) => (
                <InfoCard key={index} task={task} index ={index} />
              ))}
              {provider.placeholder}
            </div>
          )}
        </Droppable>
        :null}
      </div>
      <div className={styles.addCart}>+ Add a Cart</div>
    </div>
  );
};

export default CardContainer;
