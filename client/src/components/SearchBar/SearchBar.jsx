import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../actions";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch=useDispatch();

  //controlador de cambios en el esto del input
  const handleChange = (evento) => {
      evento.preventDefault();
    console.log("Este es mi evento en el input: ", evento)
    setInput(evento.target.value); //seteame el estado con el valor indicado en el input
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch(searchByName(input))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search country by name"
          autoComplete="off"
          onChange={handleChange}
          value={input}
        />
        <button>Buscar</button>
      </form>
    </div>
  );
}
