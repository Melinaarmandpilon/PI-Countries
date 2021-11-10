import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, setCurrentPage } from "../../actions";
import logo from '../../img/search.svg';
import styles from "./SearchBar.module.css"

export default function SearchBar() {

  const [input, setInput] = useState("");

  const dispatch=useDispatch();

  //controlador de cambios en el esto del input
  const handleChange = (evento) => {
    evento.preventDefault();
    
    setInput(evento.target.value); //seteame el estado con el valor indicado en el input
    
  };
  
  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch(searchByName(input))
    setInput("")
    
    dispatch(setCurrentPage(1))
    
  };
  

  return (
    <div>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search country by name"
          autoComplete="off"
          onChange={handleChange}
          value={input}
        />
        <button type="submit"><img src={logo} alt="img no found" /></button>
      </form>
    </div>
  );
}
