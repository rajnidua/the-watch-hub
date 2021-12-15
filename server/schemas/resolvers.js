const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username: username }).populate("savedWatchList");
    },

    me: async (_, __, context) => {
      console.log("CONTEXT USER ", context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate(
          "savedWatchList"
        );
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args.input);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    saveWatchList: async (parent, { myWatchList }, context) => {
      console.log("context is:");
      console.log(context);
      try {
        if (context.user) {
          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedWatchList: myWatchList } },
            { new: true, runValidators: true }
          );
          return user;
        }
      } catch (err) {
        console.log(err);
        throw new AuthenticationError("An unexpected error occured");
      }
    },
    removeWatchList: async (parent, { imdbId }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },

          { $pull: { savedWatchList: { imdbId } } },
          { new: true }
        );
        return user;
      }
    },
  },
};
module.exports = resolvers;
