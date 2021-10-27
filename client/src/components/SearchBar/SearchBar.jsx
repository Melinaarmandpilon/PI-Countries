import React, { useState } from "react";

export default function SearchBar (){
    const [input, setInput] = useState("")
    
    const handleChange =(evento)=>{//controlador de cambios en el esto del input
        setInput(evento.target.value)

    }

    return(
        <div>
            <input
            type="text"
            placeholder="Search country by name"
            autoComplete="off"
            onChange={handleChange}
            value={input}
            />
        </div>
    )
}