import React from "react";
import "../styles/showList.css";

const ShowList = (props) => {
  console.log("list from search bar&&&&&&&& ", props);

  return (
    <div className="SearchBarData-container">
      <div>{props.searchBarData.length}</div>

      {props.searchBarData.map((movie) => (
        <div key={movie.imdbID} className="data-row">
          <div className="crypto-name">
            <div className="img-section">
              <img src={movie.Poster} alt="image" />
            </div>
            <div className="name-section">
              <div className="title">{movie.Title}</div>
              <div className="released-year">{movie.Year}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;

/* imdbId: movie.imdbID, poster: movie.Poster, title: movie.Title,
            resultType: movie.Type, releasedYear: movie.Year,  plotType:
            movie.Plot,  */
/*
      <div className="SearchBarData-container">
        <p>it is result </p>
        {Object.keys(props.searchBarResult).Search.map((dataRow) => (
          <div className="data-row" key={dataRow.imdbID}>
            <div className="crypto-name">
              <div className="img-section">
                <img src={dataRow.Poster} alt="image" />
              </div>
              <div className="name-section">
                <div className="title">{dataRow.Title}</div>
              </div>
            </div>

            <div className="current-price">{dataRow.Year}</div>
          </div>
        ))}
      </div>
      */
