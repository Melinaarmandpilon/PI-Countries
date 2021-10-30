import React from "react";
import { Continent, Countries, NavBar} from "../../components/index.js";
import Reset from './../../components/Reset/Reset';



export default function Home() {
  return (
    <div>
      <NavBar />
      <Reset/>
      <Continent/>
      <Countries/>
    </div>
  );
}


