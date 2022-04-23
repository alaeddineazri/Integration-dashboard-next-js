import React from 'react'
import CardContainer from './CardContainer'
import styles from '../../styles/DashboardContent.module.css'

const DashboardContent = () => {
  return (
    <div className={styles.container}>
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
    </div>
  )
}

export default DashboardContent