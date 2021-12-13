const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedWatchList` array in User.js
const watchListSchema = new Schema({
  // saved watchList id from OMDB API
  imdbId: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },

  title: {
    type: String,
    required: false,
  },
  resultType: {
    type: String,
    required: false,
  },
  releasedYear: {
    type: Number,
    required: false,
  },
  plotType: {
    type: String,
    required: false,
  },
  returnType: {
    type: String,
    required: false,
  },
});

module.exports = watchListSchema;
