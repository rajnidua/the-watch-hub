import React, { useState } from "react";
import "../styles/showList.css";

import { singleMovie } from "../utils/API";

const ShowList = (props) => {
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
        <h3>display single movie data here</h3>
      </div>
    </div>
  );
};

export default ShowList;
