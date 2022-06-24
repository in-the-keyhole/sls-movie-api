// import { resetData } from "./resolver/data-access";
import { nowPlaying, movieById } from "./resolver/movies";

export default {
  Query: {
    nowPlaying: nowPlaying,
    movie: movieById
  },
  Movie: {
    posterPath: (
      parent: any,
      args: any,
      context: any
    ): String => {
      return `https://www.themoviedb.org/t/p/w500${parent.poster_path}`
    },
  },
  // Mutation: {
  //   resetData: resetData
  // }
};
