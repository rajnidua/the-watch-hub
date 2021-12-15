import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      email
      username
      savedWatchList {
        _id
        imdbId
        title
        poster
        resultType
        returnType
        releasedYear
        plotType
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
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
