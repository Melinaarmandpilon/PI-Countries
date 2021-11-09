import React from "react";
import { Link } from "react-router-dom";
import styles from "../Landing/Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <h1>Welcome PI Countries</h1>
        <Link to="/home">
          <button className={styles.btn}>Go explore </button>
        </Link>

      </div>
    </div>
  );
}
