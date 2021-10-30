import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "./../../actions/index";
import { NavBar } from "../index";

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
    <div>
      <NavBar />
      <div>
        <section>
          <div>
            <h3>{countryDetail.name}</h3>
            <img
              src={countryDetail.flag}
              alt="img not found"
              width="200px"
              height="250px"
            />
          </div>
          <h5>Continent: {countryDetail.continent}</h5>
          <h5>Code: {countryDetail.id}</h5>
          <h5>Capital: {countryDetail.capital}</h5>
          <h5>Subregion: {countryDetail.subregion}</h5>
          <h5>Area: {countryDetail.area} Km2</h5>
          <h5>Population: {countryDetail.population}</h5>
          <div>
            {countryDetail.activities?.map((activity) => (
              <div>
                <h4>Activity: {activity.name}</h4>
                <p>Difficulty: {activity.difficulty}</p>
                <p>Duration: {activity.duration} Hours</p>
                <p>Season: {activity.season}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
