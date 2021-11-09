import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ButtonHome.module.css"


export default function ButtonHome() {
  return (
    <div>
      <NavLink to="/Home">
        <button className={styles.btn}>Return Home</button>
      </NavLink>
    </div>
  );
}
