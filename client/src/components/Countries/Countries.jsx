import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Country from "../Country/Country";

import { getCountries, setCurrentPage } from "./../../actions/index";
import { NavLink } from "react-router-dom";
import { Pagination } from "./../index";
import styles from "../Countries/Countries.module.css";

export default function Countries() {
  const dispatch = useDispatch();

  const { currentPage, filterCountries } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // 1) Defino la cantidad de CARD COUNTRY que quiero por página
  const countriesPerPage = 9;

  //2) Indice del ultimo pais
  const indexLastCountry = currentPage * countriesPerPage; //9

  //3)Indice del primer pais
  const indexFirstCountry = indexLastCountry - countriesPerPage; //0

  //Paises que se van a ver por pagina,
  //esto me devuelve un arreglo =[p1,p2,p3...,p9]
  const currentCountries = filterCountries?.slice(
    indexFirstCountry, //0
    indexLastCountry //9
  );

  //esta constante me ayuda para el renderizado
  const paginate = (pageNum) => {
    dispatch(setCurrentPage(pageNum));
  };

  return (
    <div className={styles.container}>
      {currentCountries.length ? (
        <div className={styles.countries}>
          {currentCountries.map((country) => {
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
      ) : (
        <div className={styles.error}>I'm sorry, country not found, search with another name!</div>
      )}

      <div className={styles.pagination}>
        <Pagination
          allCountries={filterCountries.length}
          countriesPerPage={countriesPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
