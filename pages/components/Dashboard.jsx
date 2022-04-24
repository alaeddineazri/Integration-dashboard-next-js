import styles from "../../styles/Dashboard.module.css";
import DashboardContent from "./DashboardContent";
import { BsFullscreen } from "react-icons/bs";
import { AiOutlineFilter } from "react-icons/ai";
const Dashboard = () => {
  return (
    <div className={styles.navBox}>
      <div className={styles.container}>
        <div className={styles.Box}>
          <div className={styles.title}>
            <h1>Tasks Board</h1>
          </div>
          <div className={styles.button}>
            <button>Show backlog</button>
          </div>
          <div className={styles.navbar}></div>
        </div>
        <div className={styles.Box}>
            <div className={styles.nav}>
                <button>Overview</button>
                <button>Overview</button>
                <button>Overview</button>
                <button>Overview</button>
                <button>Overview</button>
                <button>Overview</button>
            </div>

            <div className={styles.options}>
            <btn className={styles.option}> <BsFullscreen /><div>Full Screen</div></btn>
            <btn className={styles.option}><AiOutlineFilter /> Filters</btn>
            </div>
        </div>
      </div>

      <DashboardContent />
    </div>
  );
};

export default Dashboard;
