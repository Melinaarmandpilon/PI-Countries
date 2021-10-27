import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>WELCOME COUNTRY APP</h1>
      <div>
        <Link to="/home">
          <button>HOME</button>
        </Link>
      </div>
      <div>
        <h1>Made by Melina Armand Pilón</h1>
      </div>
    </div>
  );
}
