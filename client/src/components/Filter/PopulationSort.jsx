import React from "react";
import { useDispatch } from "react-redux";
import { sortBy } from "../../actions";
// import { useState } from "react";
import styles from "./Filter.module.css"

export default function PopulationSort() {
  const dispatch = useDispatch();


  const handleChange = (evento) => {
    evento.preventDefault();
    dispatch(sortBy(evento.target.value));
    
  };

  return (
    <div className={styles.container}>
      <h5>Order by Population</h5>
      <select  onChange={handleChange}>
        <option name="Select">Select</option>
        <option name="Population Asc." value="Population Asc.">
          Population Asc.
        </option>
        <option name="Population Desc." value="Population Desc.">
          Population Desc.
        </option>
      </select>
    </div>
  );
}
