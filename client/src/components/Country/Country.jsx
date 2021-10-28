import React from 'react'

export default function Country({name,flag,continent}) {
  
    return (
        <div>
            <img src={flag} alt="img not found" width="200px" height="250px"/>
            <h3>{name}</h3>
            <h5>{continent}</h5>
        </div>
    )
}
