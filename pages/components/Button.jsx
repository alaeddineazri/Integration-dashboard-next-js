import styles from '../../styles/buttons.module.css'



const Button = ({serviceName , color}) => {

//conditional styling for button
let buttonStyle=styles.service1

  if(serviceName === 'service1'){
    buttonStyle = styles.service1
  }else if(serviceName === 'service2'){
    buttonStyle = styles.service2
  }else if(serviceName === 'service3'){
    buttonStyle = styles.service3
  }else{
    buttonStyle = styles.service4
  }



  return (
    <button className={buttonStyle}  >{serviceName}</button>
  )
}





export default Button