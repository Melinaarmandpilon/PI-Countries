import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity } from "../../actions";
import { ButtonHome, validate } from "../index";
import styles from "./AddActivity.module.css";
import s from "../Button/ButtonHome.module.css";
import icon from "../../img/icon-cross.svg";

export default function AddActivity() {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const handleDelete = ev => {
    // console.log("ev",ev)
    setInput({
        ...input,
        countryId: input.countryId.filter(country => country !== ev)
    });
};

  const [error, setError] = useState("");

  const handleChange = (evento) => {
    setError(
      validate(
        {
          ...input,
          [evento.target.name]: evento.target.value,
        }
      )
    );

    if (evento.target.name === "countryId") {
      //Condición para que pueda ir agregando varios paises
      setInput({
        ...input,
        [evento.target.name]: [...new Set([...input.countryId, evento.target.value])],
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
      countryid: [],
    });
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
              name="difficulty">
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
              name="season">
              {["Select", "Summer", "Autumn", "Winter", "Spring"].map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
            {error.season && <p className={styles.danger}>{error.season}</p>}
          </div>

          <div className={styles.formGroup}>
            <label>Select Countries: </label>
            <div>
              <select
                className={error.countryId && styles.danger}
                name="countryId"
                onChange={handleChange}>
                <option name="Select">Select</option>
                {countries.map((country) => (
                  <option
                    key={country.id}
                    name={country.name}
                    value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>

              {/* <div>{input.countries.join(" ")}</div> */}
              <div>
                {input.countryId.map((country) => (
                  <div key={country} className={styles.delete}>
                    <h5>{country}</h5>
                    <button  className={styles.btnDelete} onClick={()=> handleDelete(country)}><img src={icon} alt="delete" /></button>
                  </div>
                ))}
              </div>
            </div>
            {error.countryId && (
              <p className={styles.danger}>{error.countryId}</p>
            )}
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
                error.countryId
              }>
              Add Activity
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
