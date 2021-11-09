import React from "react";
import {
  FilterByContinent,
  Reset,
  Countries,
  NavBar,
  AlphaSort,
  PopulationSort,
  FilterByActivity,

} from "../../components/index.js";
import styles from "../Home/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar} >
        <NavBar />
      </nav>
      <section className={styles.filters}>
        <AlphaSort/>
        <PopulationSort />
        <FilterByContinent />
        <FilterByActivity />
        <Reset />
      </section>
      <section className={styles.countries}>
        <Countries />
      </section>
    </div>
  );
}
