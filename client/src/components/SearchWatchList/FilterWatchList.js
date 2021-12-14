import React, { useState, useEffect } from "react";
import { searchBarList } from "../../utils/API";
import ShowList from "../ShowList";
import Loader from "react-loader-spinner";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/filterWatchList.css";

const FilterWatchList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchBarData, setSearchBarData] = useState([]);
  const [searchResponse, setSearchResponse] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchBarList(searchInput);
      console.log(response);

      const items = response.data.Search;
      console.log(items);

      setSearchBarData(items);

      setSearchInput("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} />

        <form onSubmit={handleFormSubmit}>
          <input
            name="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            size="lg"
            data-testid="input-element"
            placeholder="Search"
            className="search-input"
          />
          <button type="submit">Button</button>
        </form>
      </div>

      <div>
        {searchBarData.length ? (
          <ShowList searchBarData={searchBarData} />
        ) : (
          "Search for a movie to begin"
        )}
      </div>
    </div>
  );
};

export default FilterWatchList;
//`Viewing ${searchBarData.length} results:`

/* import React from "react";
import SearchBar from "../Filters/SearchBar";
import Slider from "../Filters/Slider";
import RadioButton from "../Filters/RadioButton";
import "../../styles/filterWatchList.css";

const FilterWatchList = () => {
  return (
    <div className="filters-container">
      <SearchBar />
      
    </div>
  );
};

export default FilterWatchList;
 */
