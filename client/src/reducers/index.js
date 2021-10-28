import { GET_COUNTRIES, SEARCH_BY_NAME } from "../actions/types";

const initialState={
    countries:[],
    filterCountries:[] 
}

export default function rootReducer (state=initialState,action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries:action.payload, //a mi estado q' en un principio es un [] manda todo lo que te envia la acción getCountries
                filterCountries:action.payload //modifico mi estado con lo que me trae mi action payload
            }
            case SEARCH_BY_NAME:
                return {
                    ...state,
                    filterCountries:action.payload
                }
        default:
            return state;
    }

}