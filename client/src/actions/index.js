import { GET_COUNTRIES, SEARCH } from "./types";
import axios from "axios"


export function getCountries(){
    return async function (dispatch){
        try {
         const resDbCountries= await axios.get("http://localhost:3001/countries")
         const data=resDbCountries.data;
         console.log("QUE ME TRAE MI BASE DE DATOS", data)
         dispatch({type:GET_COUNTRIES,payload:data})
        } catch (error) {
            console.log("error",error)
        }
    }
}

export function search(){
    return{
        type:SEARCH
    }
}