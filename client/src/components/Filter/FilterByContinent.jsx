import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, setCurrentPage } from "../../actions";
import styles from "./Filter.module.css"

export default function FilterByContinent() {
  
  const dispatch = useDispatch();
  
  const countries = useSelector((state) => state.countries);

  let arrContinent = countries?.map((cont) => cont.continent); //me retorna un array con todos los continentes por c/u de los paises=250el
  let uniqueContinent = [...new Set(arrContinent)];
  
  // console.log("uniqueContinent", uniqueContinent);
  
  const handleChange = (evento) => {
    dispatch(filterByContinent(evento.target.value));
    dispatch(setCurrentPage(1))
  };
 
  return (
    <div className={styles.container}>
      
      <h5>Filter by Continent</h5>

      <select onChange={handleChange}>

        <option value="All">All</option>
        {uniqueContinent?.map((el, index) => (
          <option value={el} key={index}>
            {el}
          </option>
        ))}

      </select>
    </div>
  );

}



