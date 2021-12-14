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
  const [formState, setFormState] = useState([
    { type: "any", checkValue: true, id: 0 },
    { type: "movie", checkValue: false, id: 1 },

    { type: "series", checkValue: false, id: 2 },
    { type: "Episodes", checkValue: false, id: 3 },
  ]);

  const handleClick = (event) => {
    const name = event.target.name;
    console.log("movie type is " + name);
    const checked = event.target.checked;
    console.log("value of checkValue is" + checked);

    if (name === "any") {
      setFormState([
        { type: "any", checkValue: checked, id: 0 },
        { type: "movie", checkValue: false, id: 1 },
        { type: "series", checkValue: false, id: 2 },
        { type: "episodes", checkValue: false, id: 3 },
        /* formState[1],
        formState[2],
        formState[3], */
      ]);
    }

    if (name === "movie") {
      setFormState([
        { type: "any", checkValue: false, id: 0 },
        { type: "movie", checkValue: checked, id: 1 },
        { type: "series", checkValue: false, id: 2 },
        { type: "episodes", checkValue: false, id: 3 },
      ]);
    }

    if (name === "series") {
      setFormState([
        { type: "any", checkValue: false, id: 0 },
        { type: "movie", checkValue: false, id: 1 },
        { type: "series", checkValue: checked, id: 2 },
        { type: "episodes", checkValue: false, id: 3 },
        /* formState[0],
        formState[1],
        { sportName: "Tennis", checkValue: checked, id: 2 },

        formState[3], */
      ]);
    }

    if (name === "episodes") {
      setFormState([
        { type: "any", checkValue: false, id: 0 },
        { type: "movie", checkValue: false, id: 1 },
        { type: "series", checkValue: false, id: 2 },
        { type: "episodes", checkValue: checked, id: 3 },
        /*  formState[0],
        formState[1],
        formState[2],
        { sportName: "Soccer", checkValue: checked, id: 3 }, */
      ]);
    }
  };

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

  const filteredMovieType = formState.filter(
    (movieType) => movieType.checkValue && movieType.type
  );
  console.log("filtered movie type is ", filteredMovieType[0].type);

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
        <div className="checkbox-container">
          <div className="feild Swimming">
            <label for="any">Any</label>
            <input
              type="radio"
              className="any-feild"
              name={formState[0].type}
              checked={formState[0].checkValue}
              onClick={handleClick}
            />
          </div>
          <div className="feild Movie">
            <label for="movies">Movies</label>
            <input
              type="radio"
              className="movie-feild"
              name={formState[1].type}
              checked={formState[1].checkValue}
              onClick={handleClick}
            />
          </div>

          <div className="feild Series">
            <label for="series">Series</label>
            <input
              type="radio"
              className="series-feild"
              name={formState[2].type}
              checked={formState[2].checkValue}
              onClick={handleClick}
            />
          </div>

          <div className="feild Episodes">
            <label for="episodes">Episodes</label>
            <input
              type="radio"
              className="episodes-feild"
              name={formState[3].type}
              checked={formState[3].checkValue}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>

      {/* <div>
        {searchBarData.length ? (
          <ShowList searchBarData={searchBarData} />
        ) : (
          "Search for a movie to begin"
        )}
      </div> */}

      <div>
        {searchBarData.length ? (
          <ShowList
            searchBarData={searchBarData}
            selectedMovieType={filteredMovieType[0].type}
          />
        ) : (
          "Search for a movie to begin"
        )}
      </div>
    </div>
  );
};

export default FilterWatchList;
