import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities} from "../../actions";
import { filterActivities } from "../../actions";
import styles from "./Filter.module.css"

export default function FilterByActivity() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ENTRANDO EN useEffect FILTER ACTIVITY");
    dispatch(getActivities())
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);//me traigo el estado de redux con todas las actividades que se van agregando
  console.log("activities en comp. FILTER ACT", activities);
  let arrAct = activities?.map((act) => act.name);

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(filterActivities(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h5>Filter by Activity</h5>
      <select onChange={handleChange}>
        <option>Seleccionar</option>
        {arrAct?.map((act) => (
          <option key={act} value={act}>
            {act.charAt(0).toUpperCase()+ act.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
