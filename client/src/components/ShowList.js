import React from "react";
import "../styles/showList.css";

const ShowList = (props) => {
  console.log("list from search bar&&&&&&&& ", props);

  return (
    <div classNAme="display-main">
      <div className="main">
        <div className="SearchBarData-container" id="SearchBarData-container">
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
      </div>
      <div className="main">
        <h3>display single movie data here</h3>
      </div>
    </div>
  );
};

export default ShowList;
