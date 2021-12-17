import {
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  PAGINATE,
  SEARCH_BY_NAME,
  SORT,
} from "./types";
import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      const resDbCountries = await axios.get("/countries");
      const data = resDbCountries.data;
      // console.log("QUE ME TRAE MI BASE DE DATOS", data);
      return dispatch({ type: GET_COUNTRIES, payload: data });
    } catch (error) {
      console.log("error", error);
    }
  };
}
export function postActivity(input) {
  // console.log("SOY INPUT EN ACTION POST:", input);
  return async function () {
    try {
      let res = await axios.post("/activity", input);
      // console.log("SOY res.data EN postActivity:", res.data);
      if (res) alert(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}
export function getActivities() {
  return async function (dispatch) {
    try {
      let res = await axios.get(`/activity`);
      // console.log("res.data en ACTION filterByActivities", res.data);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchByName(name) {
  // console.log("name en search", name);
  return function (dispatch) {
    axios(`/countries?name=${name}`)
      .then((info) => {
        dispatch({
          type: SEARCH_BY_NAME,
          payload: info.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      let info = await axios.get(`/countries/${id}`);
      // console.log("info.data detail",info.data)
      return dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByContinent(payload) {
  // console.log("payload en ACTION filterByContinent", payload);
  return {
    type: FILTER_BY_CONTINENT,
    payload, //[america,Asia]
  };
}

export function filterActivities(payload) {
  // console.log("payload en ACTION filterActivities", payload);
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
}

export function sortBy(payload) {
  // console.log("Soy payload en ACTION sortby: ", payload);
  return {
    type: SORT,
    payload,
  };
}

export function setCurrentPage(payload) {
  return {
    type: PAGINATE,
    payload,
  };
}
