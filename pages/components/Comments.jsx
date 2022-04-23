import React from "react";
import styles from "../../styles/Comments.module.css";
import Image from "next/image";
import { BiComment } from "react-icons/bi";

const Comments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src="/image/img_avatar.png"
          alt="Avatar"
        />
        <img
          className={styles.avatar}
          src="/image/img_avatar.png"
          alt="Avatar"
        />
        <img
          className={styles.avatar}
          src="/image/img_avatar.png"
          alt="Avatar"
        />
      </div>
      <div className={styles.comment}>
        <div className={styles.commentNumber}>6 comments</div>
        <div>
          <BiComment className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Comments;
