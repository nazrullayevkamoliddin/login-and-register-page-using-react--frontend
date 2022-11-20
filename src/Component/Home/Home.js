import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>TruckPin</h1>
          <div>
              <button className={styles.dark_btn}>Userlar</button>
            <Link to='/register'>
              <button className={styles.white_btn}>Logout</button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
