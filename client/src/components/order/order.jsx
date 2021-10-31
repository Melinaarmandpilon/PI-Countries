import React from 'react'

export default function order() {
    
    const handleChangeOrder=evento=>{
        evento.preventDefault();
       setOrder(evento.target.value)//cuando el usuario selecciona Ascendente el evento.target.value="ASC"
    }

    return (
        <div>
            <h5>Order By</h5>
            <select onChange={handleChangeOrder}>
                <option value="ASC">Ascendente</option> 
                <option value="DESC">Descendente</option>
            </select>
        </div>
    )
}
 