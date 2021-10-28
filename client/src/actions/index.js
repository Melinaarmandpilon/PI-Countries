import { GET_COUNTRIES, SEARCH_BY_NAME } from "./types";
import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      const resDbCountries = await axios.get("http://localhost:3001/countries");
      const data = resDbCountries.data;
      console.log("QUE ME TRAE MI BASE DE DATOS", data);
      dispatch({ type: GET_COUNTRIES, payload: data });
    } catch (error) {
      console.log("error", error);
    }
  };
}

export function searchByName(search) {
  return function (dispatch) {
    axios("http://localhost:3001/countries?name=" + search)
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
