import React, { useState } from "react";
import "../styles/showList.css";

import { singleMovie } from "../utils/API";

const ShowList = (props) => {
  const [loading, setLoading] = useState(true);
  const [singleMovieData, setSingleMovieData] = useState([]);
  console.log("list from search bar&&&&&&&& ", props);

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
      /*  const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ["No author to display"],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
        link: book.volumeInfo.infoLink || "",
      })); */
      //console.log(bookData);
      //setSearchedBooks(bookData);
      //setSearchInput("");
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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
                  <button onClick={() => handleClick(movie.imdbID)}>X</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="main">
        <div>
          {loading ? (
            "Search for a movie to begin"
          ) : (
            <div className="main-single-movie-container">
              <div className="top-section">
                <div className="left-section"></div>
                <div className="right-section">
                  <div className="top-section">{singleMovieData.Title}</div>
                  <div className="middle-section">
                    {singleMovieData.Rated}
                    {singleMovieData.Year}
                    {singleMovieData.Genre}
                    {singleMovieData.Runtime}
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
                <div className="middle-bottom-section"></div>
                <div className="right-bottom-section"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
//  <div>single Data {singleMovieData.Title}</div>;
