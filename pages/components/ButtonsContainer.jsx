
import styles from '../../styles/ButtonsContainer.module.css'
import Button from './Button'


const ButtonsContainer = () => {
  return (
    <div className={styles.containerButton} >
      < Button serviceName='service1'/>
      < Button serviceName='service2'/>
      < Button serviceName='service3'/>
      < Button serviceName='service4' />
    </div>
  )
}

export default ButtonsContainer