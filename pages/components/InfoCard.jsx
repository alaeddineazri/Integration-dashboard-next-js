import { useState } from "react";
import styles from "../../styles/infoCard.module.css";

import ButtonsContainer from "./ButtonsContainer";
import Comments from "./Comments";
import Description from "./Description";
import ProgressBar from "./ProgressBar";
import TitleCard from "./TitleCard";
import { Draggable } from "react-beautiful-dnd";

const InfoCard = ({ task, index }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {task ? (
        <Draggable draggableId={task.id} index={index}>
          {(provider) => (
            <div
              {...provider.draggableProps}
              ref={provider.innerRef}
              {...provider.dragHandleProps}
            >
              <div className={styles.infoCard}>
                <TitleCard Title={task.content} toggleOpen={toggleOpen} />
                {open ? (
                  <>
                    <Description description="Lorem ipsum dolor sit amet consectetur adipisicing elit. N" />
                    <ButtonsContainer />
                    <Comments />
                    <ProgressBar progress={100} />
                  </>
                ) : null}
              </div>
            </div>
          )}
        </Draggable>
      ) : null}
    </>
  );
};

export default InfoCard;
