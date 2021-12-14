import React from "react";
import SearchBar from "../Filters/SearchBar";
import Slider from "../Filters/Slider";
import RadioButton from "../Filters/RadioButton";
import "../../styles/filterWatchList.css";

const FilterWatchList = () => {
  return (
    <div className="filters-container">
      <SearchBar />
      {/* <div className="filters-right">
        <Slider />
        <RadioButton />
      </div> */}
    </div>
  );
};

export default FilterWatchList;
