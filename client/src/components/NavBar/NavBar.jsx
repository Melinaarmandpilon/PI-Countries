import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

export default function NavBar (){
    return (
      <div>
          <div>
          <SearchBar/>
          </div>
          <div>
          <Link to="/activity">Add Activity</Link>
          </div>
          <div>
          <Link to="/Home">Home</Link>
          </div>
      </div>
    )
}