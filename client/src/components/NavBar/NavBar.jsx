import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <SearchBar />
      <Link to="/activity">Add Activity</Link>
      <Link to="/Home">Home</Link>
    </div>
  );
}
