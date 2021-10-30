import { FILTER_BY_CONTINENT, GET_COUNTRIES, GET_COUNTRY_DETAIL, SEARCH_BY_NAME } from "./types";
import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      const resDbCountries = await axios.get("http://localhost:3001/countries");
      const data = resDbCountries.data;
      console.log("QUE ME TRAE MI BASE DE DATOS", data);
      return dispatch({ type: GET_COUNTRIES, payload: data });
    } catch (error) {
      console.log("error", error);
    }
  };
}

export function searchByName(search) {
  return function (dispatch) {
    axios(`http://localhost:3001/countries?name=${search}`)
      .then((info) => {
        dispatch({
          type: SEARCH_BY_NAME,
          payload: info.data,
        });
      })
      .catch((error) => {
        console.log("Este error se debe a: " + error);
      });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      let info = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByContinent(payload){
  return ({
    type:FILTER_BY_CONTINENT,
    payload
  })

}
