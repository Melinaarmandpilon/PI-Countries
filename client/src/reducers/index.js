import { FILTER_BY_CONTINENT, GET_COUNTRIES, GET_COUNTRY_DETAIL, SEARCH_BY_NAME } from "../actions/types";

const initialState={
    countries:[],
    filterCountries:[],
    countryDetail:[]
}

export default function rootReducer (state=initialState,action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries:action.payload, //a mi estado q' en un principio es un [] manda todo lo que te envia la acción getCountries
                filterCountries:action.payload //cuando traigo todos los paises modifico este estado también con la misma info 
                //que el anterior, luego utilizo esto para los filtros
            }
            case SEARCH_BY_NAME:
                return {
                    ...state,
                    filterCountries:action.payload //actualizo el estao de esta propiedad cada vez que busco un pais por nombre
                }
            case GET_COUNTRY_DETAIL:
                return {
                    ...state,
                    countryDetail:action.payload
                }
            case FILTER_BY_CONTINENT:
                if(action.payload==="All"){
                    return {
                        ...state,
                        filterCountries:state.countries
                    }
                }else{
                    return{
                        ...state,
                        filterCountries:state.countries.filter(el=>el.continent===action.payload)
                    }
                }
        default:
            return state;
    }

}