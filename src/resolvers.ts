import { nowPlaying, movieById } from "./resolver/movies";

export default {
  Query: {
    nowPlaying: nowPlaying,
    movie: movieById
  },
  Movie: {
    posterPath: (parent: any, args: any, context: any): String => {
      return `https://www.themoviedb.org/t/p/w500${parent.poster_path}`;
    },
    posterPathW92: (parent: any, args: any, context: any): String => {
      return `https://www.themoviedb.org/t/p/w92${parent.poster_path}`;
    },
    posterPathW154: (parent: any, args: any, context: any): String => {
      return `https://www.themoviedb.org/t/p/w154${parent.poster_path}`;
    },
    posterPathW185: (parent: any, args: any, context: any): String => {
      return `https://www.themoviedb.org/t/p/w185${parent.poster_path}`;
    },
    posterPathW342: (parent: any, args: any, context: any): String => {
      return `https://www.themoviedb.org/t/p/w342${parent.poster_path}`;
    },
    posterPathW780: (parent: any, args: any, context: any): String => {
      return `https://www.themoviedb.org/t/p/w780${parent.poster_path}`;
    },
  },
};
