import { GET_COUNTRIES } from "../actions/types";

const initialState={
    countries:[], 
}

export default function rootReducer (state=initialState,action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries:action.payload, //a mi estado q' en un principio es un [] manda todo lo que te envia la acción getCountries
            }
        default:
            return state;
    }

}