import React from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../actions/index';
import styles from "./ButtonHome.module.css"

export default function Reset() {
    
    const dispatch=useDispatch()

    const allCountries=(e)=>{
        dispatch(getCountries())
    }

    return (
        <div>
            <button className={styles.btn} onClick={allCountries}>RESET</button>
        </div>
    )
}
