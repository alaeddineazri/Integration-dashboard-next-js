import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import styles from "../../styles/DashboardContent.module.css";
import initialData from "./data";
import { DragDropContext } from "react-beautiful-dnd";

const DashboardContent = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
   
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newState);
      return;
    }

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    }
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },}
      setData(newState);
    

  };




  return (
    <div className={styles.container}>
      { process.browser ? 
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnsOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((tasksId) => data.tasks[tasksId]);
          return (
            <CardContainer key={column.Id} column={column} tasks={tasks} />
          );
        })}
      </DragDropContext>
      : null }
    </div>
  );
};

export default DashboardContent;
