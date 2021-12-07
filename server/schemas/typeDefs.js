const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    watchListCount: String
    savedWatchList: [WatchList]!
  }

  type WatchList {
    _id: ID
    imdbId: String
    poster: String
    title: String
    resultType: String
    releasedYear: Float
    plotType: String
    returnType: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input SavedWatchListInput {
    _id: ID
    imdbId: String
    poster: String
    title: String
    resultType: String
    releasedYear: Float
    plotType: String
    returnType: String
  }

  type Query {
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveWatchList(myWatchList: SavedWatchListInput!): User
    removeWatchList(imdbId: String!): User
  }
`;

module.exports = typeDefs;
