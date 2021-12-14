import axios from "axios";

export const searchBarList = (title) => {
  console.log("title recieved in api is " + title);
  return axios.get(
    `http://www.omdbapi.com/?s=${title}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
  );
};

export const singleMovie = (id) => {
  console.log("movie id recieved in api is " + id);
  return axios.get(
    `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
  );
};
