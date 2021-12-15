import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: userInput!) {
    addUser(input: $input) {
      token
      user {
        username
        _id
        email

        streetName
        houseNumber
        postalCode
        state
        country
        city
      }
    }
  }
`;

/* export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`; */

export const SAVE_WATCHLIST = gql`
  mutation saveWatchList($myWatchList: SavedWatchListInput!) {
    saveWatchList(myWatchList: $myWatchList) {
      username
      savedWatchList {
        _id
        imdbId
        poster
        title
        resultType
        releasedYear
        plotType
        returnType
      }
    }
  }
`;

export const REMOVE_WATCHLIST = gql`
  mutation removeWatchList($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      watchListCount
      savedWatchList {
        imdbId
        poster
        title
        resultType
        releasedYear
        plotType
        returnType
      }
    }
  }
`;
