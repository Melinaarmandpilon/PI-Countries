import React from "react";
import { NavLink } from "react-router-dom";

export default function ButtonHome() {
  return (
    <div>
      <NavLink to="/Home">
        <button>Volver a Home</button>
      </NavLink>
    </div>
  );
}
