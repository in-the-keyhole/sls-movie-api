import { resetData } from "./resolver/data-access";
import { nowPlaying, movieById } from "./resolver/movies";

export default {
  Query: {
    nowPlaying: nowPlaying,
    movie: movieById
  },
  Mutation: {
    resetData: resetData
  }
};
