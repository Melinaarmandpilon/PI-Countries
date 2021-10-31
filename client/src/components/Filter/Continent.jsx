import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent } from "../../actions";

export default function Continent() {
  const dispatch = useDispatch();
  const filterCountries = useSelector((state) => state.filterCountries);

  const handleChange = (evento) => {
    console.log("evento.target.value", evento.target);
    dispatch(filterByContinent(evento.target.value));
  };

  let continent=filterCountries?.map(cont=>cont.continent)//me retorna un array con todos los continentes por c/u de los paises=250el
//   let uniqueContinent =[... new Set(continent)]
  let uniqueContinent =[]
  continent.forEach(c=>{
      if(!uniqueContinent.includes(c)){
        uniqueContinent.push(c);
      }
  })

  console.log("uniqueContinent",uniqueContinent)

  return (
    <div>
      <label>Filter by Continent</label>
      <select onChange={handleChange}>
        <option value="All">All</option>
        {uniqueContinent?.map((el) => (
          <option value={el}> {el}</option>
        ))}
      </select>
    </div>
  );
}

//   <input type="checkbox" />