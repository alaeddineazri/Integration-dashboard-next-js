import React from 'react'
import styles from "../../styles/ProgressBar.module.css"

const ProgressBar = ({progress}) => {
  return (
    <div className={styles.container}>
        <div className={styles.leftBox}>
            <div className={styles.progressBarContainer}>
                <div style={{width:`${progress}%`}}  className={styles.progressBar}   >

                </div>
            </div>
            <div className={styles.state}>
            {progress}%
            </div>
        </div>
        <div className={styles.rightBox}>
            Dates 
        </div>
    </div>
  )
}

export default ProgressBar