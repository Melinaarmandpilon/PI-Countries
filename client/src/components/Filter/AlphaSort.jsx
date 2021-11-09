import React from 'react'
import { useDispatch } from 'react-redux';
import { sortBy } from '../../actions';
import styles from "./Filter.module.css"

export default function AlphaSort() {
    const dispatch=useDispatch();
    
    const handleChange=evento=>{
        console.log("evento.target.value en SORT: ",evento.target.value)
        // console.log("evento.checked en SORT: ",evento.target.checked)
        evento.preventDefault();
        // setChecked(evento.target.checked)
       dispatch(sortBy(evento.target.value))//cuando el usuario selecciona Ascendente el evento.target.value="ASC"

    }

    // const [checked,setChecked]=useState(false)

    return (
        <div className={styles.container}>
            <h5>Order by Alphabetically</h5>
            {/* <label><input type="checkbox" value="ASC" onChange={handleChange} checked={checked}/>A-Z</label>
            <label><input type="checkbox" value="DESC" onChange={handleChange} checked={checked} />Z-A</label> */}
            <select onChange={handleChange}>
                <option>Seleccionar</option> 
                <option value="ASC">Ordenar de A a Z</option> 
                <option value="DESC">Ordenar de Z a A</option>
            </select>
        </div>
    )
}
 