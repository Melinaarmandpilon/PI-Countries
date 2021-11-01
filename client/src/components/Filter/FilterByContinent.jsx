import React from "react";
// import React , { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent } from "../../actions";


export default function FilterByContinent() {

  //-----------------------CON SELECT-----------------
  const dispatch = useDispatch();
  
  const countries = useSelector((state) => state.countries);
  let arrContinent = countries?.map((cont) => cont.continent); //me retorna un array con todos los continentes por c/u de los paises=250el
  let uniqueContinent = [...new Set(arrContinent)];
  
  console.log("uniqueContinent", uniqueContinent);
  
  const handleChange = (evento) => {
    console.log("evento.target.value", evento.target.value);
    dispatch(filterByContinent(evento.target.value));
    console.log("filterCountries", evento.target.value);
  };
 
  return (
    <div>
      <label>Filter by Continent</label>
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

  // ------------------------------CON INPUT---------------------
  
  // const dispatch = useDispatch();
  
  // const [filterAccumulation, setFilterAccumulation] = useState([]);
  // const [checked, setChecked] = useState(false)

  //   const countries = useSelector((state) => state.countries);

  // let arrContinent = countries?.map((cont) => cont.continent); //me retorna un array con todos los continentes por c/u de los paises=250el
  // let uniqueContinent = [...new Set(arrContinent)];
  // console.log("uniqueContinent", uniqueContinent);

  // // const handleClick = (evento) => {
  // //   console.log("evento.target.value", evento.target.value);
    
  // // };
  // const handleChange=evento=>{
  //   console.log("evento.target.value", evento.target.value);
  //   setChecked(evento.target.checked)
  //   console.log("evento.target.checked", evento.target.checked);
  //   if(evento.target.checked) setFilterAccumulation(filterAccumulation.concat(evento.target.value))
  //   dispatch(filterByContinent(filterAccumulation));
  //   console.log("filterAccumulation",filterAccumulation);

  // }

  // return (
  //   <form>
  //     <label>Filter by Continent</label>
  //       <label>
  //         <input
  //           type="checkbox"
  //           value="All"  /* onClick={handleClick} */ onChange={handleChange}/*  checked={checked}  */
  //           />
  //         All
  //       </label>
  //     <option value="All">All</option>
  //     {uniqueContinent?.map((el, index) => (
  //       <label key={index}>
  //         <input
  //           type="checkbox"
  //           id={el}
  //           name={el}
  //           value={el}
  //         // onClick={handleClick}
  //          onChange={handleChange}
  //           />
  //         {el}
  //       </label>
  //     ))}
  //   </form>
  // );
}



  // let uniqueContinent =[]
  // continent.forEach(c=>{
  //     if(!uniqueContinent.includes(c)){
  //       uniqueContinent.push(c);
  //     }
  // })