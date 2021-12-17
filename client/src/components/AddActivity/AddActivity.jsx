import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity } from "../../actions";
import { ButtonHome, validate } from "../index";
import styles from "./AddActivity.module.css";
import s from "../Button/ButtonHome.module.css";

export default function AddActivity() {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [error, setError] = useState("");

  const handleChange = (evento) => {
    setError(
      validate({
        ...input,
        [evento.target.name]: evento.target.value,
      })
    );

    if (evento.target.name === "countries") {
      //Condición para que pueda ir agregando varios paises
      setInput({
        ...input,
        [evento.target.name]: [...input.countries, evento.target.value],
      });
    } else {
      setInput({
        ...input,
        [evento.target.name]: evento.target.value,
      });
    }
  };

  const handleclick = (e) => {
    e.preventDefault();
    // console.log("input en handleclick", input);
    dispatch(postActivity(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    })
  };

 
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset>
          <legend>ADD ACTIVITY</legend>
          <div className={styles.formGroup}>
            <label>Name </label>
            <input
              name="name"
              type="text"
              value={input.name}
              autoComplete="off"
              placeholder="Name of the activity "
              onChange={handleChange}
              className={error.name && styles.danger}
            />
            {error.name ? <p className={styles.danger}>{error.name}</p> : ""}
          </div>
          <div className={styles.formGroup}>
            <label>Difficulty (1 - 5) </label>
            <select
              className={error.difficulty && styles.danger}
              onChange={handleChange}
              name="difficulty"
            >
              {["Select", 1, 2, 3, 4, 5].map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
            {error.difficulty && (
              <p className={styles.danger}>{error.difficulty}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Duration (minutes) </label>
            <input
              name="duration"
              value={input.duration}
              onChange={handleChange}
              className={error.duration && styles.danger}
            />
            {error.duration && (
              <p className={styles.danger}>{error.duration}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Season: </label>
            <select
              className={error.season && styles.danger}
              onChange={handleChange}
              name="season"
            >
              {["Select", "Summer", "Autumn", "Winter", "Spring"].map(
                (el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                )
              )}
            </select>
            {error.season && <p className={styles.danger}>{error.season}</p>}
          </div>

          <div className={styles.formGroup}>
            <label>Select Countries: </label>
            <div>
              <select
                className={error.countries && styles.danger}
                name="countries"
                onChange={handleChange}
              >
                <option name="Select">Select</option>
                {countries.map((country) => (
                  <option
                    key={country.id}
                    name={country.name}
                    value={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
             
              <div>{input.countries.join(" ")}</div>
              {error.countries && (
                <p className={styles.danger}>{error.countries}</p>
              )}
            </div>
          </div>
          
          <div className={styles.btns}>
            <ButtonHome />
            <button
              className={s.btn}
              onClick={handleclick}
              disabled={
                !input.name ||
                error.difficulty ||
                error.season ||
                error.countries
              }
            >
              Add Activity
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}




