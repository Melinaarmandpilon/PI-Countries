import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Country from "../Country/Country";
import { getCountries } from "./../../actions/index";
import { NavLink } from "react-router-dom";
import { Pagination } from "./../index";
import styles from "../Countries/Countries.module.css";

export default function Countries() {
  const dispatch = useDispatch(); //utilizo esta constante para despachar las acciones
  const { /* countries, */ filterCountries } = useSelector((state) => state); //con esto le digo: traeme en la const todo lo que tengas en el estado de filterCountries

  //para traer los paises cuando el componente se monta, uso el useEffect
  useEffect(() => {
    console.log("Entrando a useEffect en Countries");
    // if (countries.length === 0)
      //con esta condición hago que solo se monte el componente cuando Countries este en cero
      dispatch(getCountries()); //este dispatch es lo mismo que usar el mapDispatchToProps
  }, [dispatch/* , countries.length */]); //array de dependencia, queda escuchando y cuando alguna de las dependencias cambie volver a ejecutarte

  //-------------PAGINADO-----------------
  // 1)//Defino que la primer página arranque en 1
  const [numberPage, setNumberPage] = useState(1);

  // 2) Defino la cantidad de CARD COUNTRY que quiero por página
  const countriesPerPage = 9;

  //3) Indice del ultimo pais
  const indexLastCountry = numberPage * countriesPerPage;

  //4)Indice del primer pais
  const indexFirstCountry = indexLastCountry - countriesPerPage;

  //Paises que se van a ver por pagina,
  //esto me devuelve un arreglo con paises del 0 al 10
  const currentCountries = filterCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );
  // indice del arreglo:                            0        1         9
  //Cantidad de paises por Pag 1: slice (0,10) --->[pais 1,pais 2,...,pais10]
  //                       Pag 2: slice (10,20)--->[pais 11,pais 2,...,pais20]
  //                       Pag 3: slice (20,30)--->[pais 20,pais 2,...,pais30]

  //esta constante me ayuda para el renderizado
  function paginate(pageNum) {
    setNumberPage(pageNum);
  }

  return (
    <div className={styles.container}>
      <div className={styles.countries}>
          {currentCountries?.map((country) => {
            return (
              <div key={country.id}>
                <NavLink to={"/home/" + country.id} className={styles.link}>
                  <Country
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    population={country.population}
                  />
                </NavLink>
              </div>
            );
          })}
      </div>

      <div className={styles.pagination}>
        <Pagination
          allCountries={filterCountries.length}
          countriesPerPage={countriesPerPage}
          paginate={paginate}
          numberPage={numberPage}
        />
      </div>
    </div>
  );
}
