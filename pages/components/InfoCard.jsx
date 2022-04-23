import styles from '../../styles/infoCard.module.css'

import ButtonsContainer from './ButtonsContainer'
import Comments from './Comments'
import Description from './Description'
import TitleCard from './TitleCard'



const InfoCard = () => {
  return (
    <div className={styles.infoCard}>
        <TitleCard />
        <Description />
        <ButtonsContainer />
        <Comments />
        
    </div>
  )
}

export default InfoCard