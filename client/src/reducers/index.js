import {
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  PAGINATE,
  SEARCH_BY_NAME,
  SORT,
} from "../actions/types";

const initialState = {
  countries: [],
  filterCountries: [],
  countryDetail: [],
  activities:[],
  currentPage:Number("1"),
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload, 
        filterCountries: action.payload, 
       
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        filterCountries: action.payload, //actualizo el estao de esta propiedad cada vez que busco un pais por nombre
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case FILTER_BY_CONTINENT:
      if (action.payload === "All") {
        return {
          ...state,
          filterCountries: state.countries,
        };
      } else {
        return {
          ...state,
          filterCountries:state.countries.filter(el=>action.payload.includes(el.continent))
          
        };
      }
      case PAGINATE:
        return{
          ...state,
          currentPage:action.payload
        }
      case GET_ACTIVITIES:
        // console.log("REDUCER get activity",action.payload)
        return {
          ...state,
          activities:action.payload
        };
        case FILTER_BY_ACTIVITY:
          console.log("REDUCER FILTER_BY_ACTIVITY",action.payload)
          return{
            ...state,
            filterCountries:state.countries.filter(el => el.activities.map(e=>e.name).includes(action.payload))
          } 

    case SORT:
      if (action.payload === "Population Asc.") {
        return {
          ...state,
          filterCountries: state.filterCountries.sort(
            (a, b) => a.population - b.population
          ), 
        };
      }
      if (action.payload === "Population Desc.") {
        return {
          ...state,
          filterCountries: state.filterCountries.sort(
            (a, b) => b.population - a.population
          ),
        };
      }
      if (action.payload === "ASC") {
        return {
          ...state,
          filterCountries: state.filterCountries.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            return 0;
          }),
        };
      }
      if (action.payload === "DESC") {
        return {
          ...state,
          filterCountries: state.filterCountries.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              //pongo primero a
              return -1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              //pongo primero b
              return 1;
            }
            return 0; //son iguales, es indistinto el orden
          }),
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
