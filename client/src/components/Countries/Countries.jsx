import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Country from "../Country/Country";
import { getCountries } from "./../../actions/index";
import { NavLink } from "react-router-dom";

export default function Countries() {
  const dispatch = useDispatch(); //utilizo esta constante para despachar las acciones
  const allCountries = useSelector((state) => state.filterCountries); //con esto le digo: traeme en la const todo lo que tengas en el stado de countries
  //para traer los paises cuando el componente se monta, uso el useEffect

  useEffect(() => {
    console.log("Entrando a useEffect"); //Se monta
    dispatch(getCountries()); //este dispatch es lo mismo que usar el mapDispatchToProps
  }, [dispatch]); //array de dependencia, queda escuchando y cuando alguna de las dependencias cambie volver a ejecutarte

  return (
    <div>
      {allCountries?.map((country) => {
        return (
          <NavLink to={"/home/"+country.id}>
            <Country
              name={country.name}
              flag={country.flag}
              continent={country.continents}
              key={country.id}
            />
          </NavLink>
        );
      })}
    </div>
  );
}
