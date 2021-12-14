import React, { useState, useEffect } from "react";
import { searchBarList } from "../../utils/API";
import ShowList from "../ShowList";
import Loader from "react-loader-spinner";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
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

      const movieData = items.map((movie) => console.log(movie.Title));
      /* console.log(movieData);
      setSearchBarData(movieData); */
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
      <h2>
        {searchBarData.length
          ? `Viewing ${searchBarData.length} results:`
          : "Search for a movie to begin"}
      </h2>
    </div>
  );
};

export default SearchBar;
