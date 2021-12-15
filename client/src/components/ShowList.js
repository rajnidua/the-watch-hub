import React, { useState } from "react";
import "../styles/showList.css";

import { singleMovie } from "../utils/API";
import { useMutation } from "@apollo/client";
import { SAVE_WATCHLIST } from "../utils/mutations";
import Auth from "../utils/auth.js";
import { faList } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowList = (props) => {
  const [loading, setLoading] = useState(true);
  const [singleMovieData, setSingleMovieData] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  console.log("list from search bar&&&&&&&& ", props);

  const [saveState, setSaveState] = useState({
    imdbID: "",
    title: "",
    poster: "",
    resultType: "",
    releasedYear: "",
    plotType: "",
  });

  const [saveWatchList, { error, data }] = useMutation(SAVE_WATCHLIST);

  const handleSave = async (id, title, poster, type, year, plot) => {
    console.log("SAVE ####" + id);
    const saveMovie = {
      imdbId: id,
      title: title,
      poster: poster,
      resultType: type,
      releasedYear: year,
      plotType: plot,
    };
    /*  setSaveState({
      imdbID: id,
      title: title,
      poster: poster,
      resultType: type,
      releasedYear: year,
      plotType: plot,
    }); */
    console.log("^^^^^^^", saveMovie);
    try {
      const { data } = await saveWatchList({
        variables: { myWatchList: { ...saveMovie } },
      });

      console.log("SAVED DATA -->> ", data);
      setConfirmed(true);

      //Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    /*  setSaveState({
      imdbID: "",
      title: "",
      poster: "",
      resultType: "",
      releasedYear: "",
      plotType: "",
    }); */
  };

  const handleClick = async (id) => {
    console.log("I am inside handle click");
    console.log(id);

    try {
      const response = await singleMovie(id);
      console.log(response);

      const items = response.data;
      console.log(items);
      setSingleMovieData(items);
      console.log(singleMovieData);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("###########", saveState);

  return (
    <div classNAme="display-main">
      <div className="main">
        <div className="SearchBarData-container" id="SearchBarData-container">
          <div>{props.searchBarData.length} RESULTS</div>

          {props.searchBarData.map((movie) => (
            <div key={movie.imdbID} className="data-row">
              {props.selectedMovieType === "any" ? (
                <button
                  className="btn-view1"
                  onClick={() => handleClick(movie.imdbID)}
                >
                  <div className="crypto-name">
                    <div className="img-section">
                      <img src={movie.Poster} alt="image" />
                    </div>
                    <div className="name-section">
                      <div className="title">{movie.Title}</div>

                      <div className="released-year">{movie.Year}</div>
                    </div>
                  </div>
                </button>
              ) : props.selectedMovieType !== "any" &&
                props.selectedMovieType === movie.Type ? (
                <button
                  className="btn-view1"
                  onClick={() => handleClick(movie.imdbID)}
                >
                  <div className="crypto-name">
                    <div className="img-section">
                      <img src={movie.Poster} alt="image" />
                    </div>
                    <div className="name-section">
                      <div className="title">{movie.Title}</div>

                      <div className="released-year">{movie.Year}</div>
                      {/* <button
                        className="btn-view"
                        onClick={() => handleClick(movie.imdbID)}
                      >
                        VIEW
                      </button> */}
                    </div>
                  </div>
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="main-right">
        {loading ? (
          "Select from the list to view details : "
        ) : (
          <div className="main-single-movie-container">
            <div className="top-section">
              <div className="left-section">
                <img
                  className="single-image"
                  src={singleMovieData.Poster}
                ></img>
              </div>
              <div className="right-section">
                {Auth.loggedIn() ? (
                  <button
                    className="btn-view-save"
                    onClick={() =>
                      handleSave(
                        singleMovieData.imdbID,
                        singleMovieData.Title,
                        singleMovieData.Poster,
                        singleMovieData.Year,
                        singleMovieData.Actors,
                        singleMovieData.Year,
                        singleMovieData.Plot
                      )
                    }
                  >
                    Watchlist <FontAwesomeIcon icon={faList} />
                  </button>
                ) : (
                  ""
                )}
                <div className="top-section">{singleMovieData.Title}</div>
                <div className="middle-section">
                  <span className="additional rated">
                    {singleMovieData.Rated}
                  </span>
                  <span className="additional">{singleMovieData.Year}</span>
                  <span className="additional">{singleMovieData.Genre}</span>
                  <span className="additional">{singleMovieData.Runtime}</span>
                </div>
                <div className="bottom-section">{singleMovieData.Actors}</div>
              </div>
            </div>
            <div className="middle-section">{singleMovieData.Plot}</div>
            <div className="bottom-section">
              <div className="bottom-section-part">
                {singleMovieData.Ratings.map((movieRating) => (
                  <div className="rating-section">
                    <div>{movieRating.Source}</div>
                    <div>{movieRating.Value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowList;
