import React from 'react'
import styles from "./Country.module.css"
import { numberWithCommas } from '../utils'

export default function Country({name,flag,continent,population}) {
  
    return (
        <div className={styles.container}>
            <img src={flag} alt="img not found"/>
            <h4>Name: {name}</h4>
            <p>Continent: {continent}</p>
            <p>Population: {numberWithCommas(Number(population))}</p>
        </div>
    )
}
