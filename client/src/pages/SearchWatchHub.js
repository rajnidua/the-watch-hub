import React, { useState } from "react";
import FilterWatchList from "../components/SearchWatchList/FilterWatchList";
import AllWatchList from "../components/SearchWatchList/AllWatchList";
import SingleWatchDetail from "../components/SearchWatchList/SingleWatchDetail";
import "../styles/searchWatchHub.css";

const SearchWatchHub = () => {
  return (
    // <div className="main-container">
    <FilterWatchList className="filter-watch" />

    // </div>
  );
};

export default SearchWatchHub;
