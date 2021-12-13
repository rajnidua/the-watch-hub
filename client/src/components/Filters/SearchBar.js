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

  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setSearchInput(value);
    showLoader();

    try {
      console.log("search input inside try block is: " + value);
      const response = await searchBarList(value);
      setLoading(false);
      hideLoader();

      setSearchBarData(response.data);

      if (response.status !== 200) {
        setErrorMessage(true);
      }
    } catch (err) {
      // console.log(err);
      setErrorMessage(true);
    }
  };

  if (errorMessage) {
    return <h1>Something went wrong!! Try Again!!</h1>;
  }
  return (
    <div className="container">
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} />
        <input
          name="searchInput"
          value={searchInput}
          onChange={handleInputChange}
          type="text"
          size="lg"
          data-testid="input-element"
          placeholder="Search"
          className="search-input"
        />
      </div>
      <div className="result-container">
        {loading ? (
          <div className="show-loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        ) : (
          <ShowList searchBarResult={searchBarData} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
