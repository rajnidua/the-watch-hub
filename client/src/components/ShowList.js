import React from "react";

const ShowList = (props) => {
  console.log("list from search bar&&&&&&&& ", props);

  return (
    <div>
      <div>it is loading</div>
      <div>{props.searchBarData.length}</div>
      <div>
        {props.searchBarData.map((movie) => (
          <div key={movie.imdbID}>
            <p>{movie.imdbID}</p>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;

/* imdbId: movie.imdbID, poster: movie.Poster, title: movie.Title,
            resultType: movie.Type, releasedYear: movie.Year,  plotType:
            movie.Plot,  */
/*
      <div className="crypto-container">
        <p>it is result </p>
        {Object.keys(props.searchBarResult).Search.map((dataRow) => (
          <div className="crypto-row" key={dataRow.imdbID}>
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
