import axios from "axios";

export const searchBarList = (title) => {
  console.log("title recieved in api is " + title);
  return axios.get(
    `http://www.omdbapi.com/?s=${title}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
  );
};
