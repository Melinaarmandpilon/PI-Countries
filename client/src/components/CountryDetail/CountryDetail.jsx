import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "./../../actions/index";
import { ButtonHome } from "..";
import { numberWithCommas } from "../utils";
import styles from "./CountryDetail.module.css";

export default function CountryDetail(props) {
  console.log("Soy las props de countrydetail: ", props);
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  console.log("Soy countryDetail de detail: ", countryDetail);

  useEffect(() => {
    console.log(" se monta componete");
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>Data Country</h3>
        <img src={countryDetail.flag} alt="img not found" />
        <div></div>
        <p>Name: {countryDetail.name}</p>
        <p>Continent: {countryDetail.continent}</p>
        <p>Code: {countryDetail.id}</p>
        <p>Capital: {countryDetail.capital}</p>
        <p>Subregion: {countryDetail.subregion}</p>
        <p>
          Area: {numberWithCommas(Number(countryDetail.area))} Km<sup>2</sup>
        </p>
        <p>Population: {numberWithCommas(Number(countryDetail.population))}</p>
        {/* RENDERIZADO DE ACTIVIDADES */}
        <div>
          <h3>Data Activity</h3>
          {countryDetail.activities?.map((activity) => (
            <div>
              <h4> {activity.name.charAt(0).toUpperCase()+ activity.name.slice(1).toLowerCase()}</h4>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration} minutes</p>
              <p>Season: {activity.season}</p>
            </div>
          ))}
        </div>
      <ButtonHome />
      </div>
    </div>
  );
}
