import Link from 'next/link'
import styles from '../../styles/Header.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import  { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineFolder } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { RiArrowDropDownLine } from 'react-icons/ri'


function Header() {

    return (
        <nav className={styles.header}>
          <div className={styles.leftBox}>
              <div className={styles.logo} >LOGO</div>
              <button > Start </button>
              <button > Project</button>
              <button > Team</button>
              <button > Planning</button>
              <button > Calender</button>
          </div>
            <div className={styles.rightBox}>
            <AiOutlineSearch/>
            <CgMenuGridR />
            <AiOutlinePlusCircle/>
            <AiOutlineSearch/>
            <AiOutlineFolder/>
            <IoMdNotificationsOutline/>
            <img
          className={styles.avatar}
          src="/image/img_avatar.png"
          alt="Avatar"
        />
            <RiArrowDropDownLine/>
            </div>
  </nav>
 
    )
}

export default Header