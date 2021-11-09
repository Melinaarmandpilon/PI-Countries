import React from "react";
import { useDispatch } from "react-redux";
import { sortBy } from "../../actions";
// import { useState } from "react";
import styles from "./Filter.module.css"

export default function PopulationSort() {
  const dispatch = useDispatch();
//   const [option, setOption] = useState("");

  const handleChange = (evento) => {
    console.log("evento.target.value en SORT: ", evento.target.value);
    evento.preventDefault();
    dispatch(sortBy(evento.target.value)); //cuando el usuario selecciona Ascendente el evento.target.value="ASC"
    //    if(option="Population Asc.") setOption(evento.tart.value)
    // setOption(evento.target.value);
  };

  return (
    <div className={styles.container}>
      <h5>Order by Population</h5>
      <select /* value={option} */ onChange={handleChange}>
        <option name="Seleccionar">Seleccionar</option>
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
