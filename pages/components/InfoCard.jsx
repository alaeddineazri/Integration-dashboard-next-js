import { useState } from 'react'
import styles from '../../styles/infoCard.module.css'

import ButtonsContainer from './ButtonsContainer'
import Comments from './Comments'
import Description from './Description'
import ProgressBar from './ProgressBar'
import TitleCard from './TitleCard'



const InfoCard = () => {

  const [open, setOpen] = useState(true);



  const toggleOpen = () => {
    setOpen(!open);
  }


  return (
    <div className={styles.infoCard}>
        <TitleCard  Title="This is title" toggleOpen={toggleOpen} />
        { open ? <>
          <Description  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. N"/>
        <ButtonsContainer />
        <Comments />
        <ProgressBar  progress={100}/>
        </> : null}
        
        
    </div>
  )
}

export default InfoCard