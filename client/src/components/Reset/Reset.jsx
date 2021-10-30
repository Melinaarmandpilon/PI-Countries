import React from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from './../../actions/index';

export default function Reset() {
    
    const dispatch=useDispatch()

    const allCountries=(e)=>{
        dispatch(getCountries())
    }

    return (
        <div>
            <button onClick={allCountries}>RESET</button>
        </div>
    )
}
