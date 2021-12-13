import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
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
