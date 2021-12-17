import React from 'react'
import { useDispatch } from 'react-redux';
import { sortBy } from '../../actions';
import styles from "./Filter.module.css"

export default function AlphaSort() {
    const dispatch=useDispatch();
    
    const handleChange=evento=>{
       evento.preventDefault();
       dispatch(sortBy(evento.target.value))//cuando el usuario selecciona Ascendente el evento.target.value="ASC"

    }
    return (
        <div className={styles.container}>
            <h5>Order by Alphabetically</h5>
            <select onChange={handleChange}>
                <option>Select</option> 
                <option value="ASC">Order from A to Z</option> 
                <option value="DESC">Order from Z to A</option>
            </select>
        </div>
    )
}
 