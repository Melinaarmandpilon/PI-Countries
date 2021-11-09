import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../actions";
import logo from '../../img/search.svg';
import styles from "./SearchBar.module.css"

export default function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch=useDispatch();

  //controlador de cambios en el esto del input
  const handleChange = (evento) => {
    evento.preventDefault();
    console.log("Este es mi evento en el input: ", evento)
    setInput(evento.target.value); //seteame el estado con el valor indicado en el input
    dispatch(searchByName(input))
  };
  
  const handleSubmit = (evento) => {
    evento.preventDefault();
    setInput("")
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
