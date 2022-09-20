import { nowPlaying, movieById, trailer, credits } from './resolver/movies';
import { Credits, getMovie, Movie, Trailer } from './resolver/rest-access';

const imageURLPrefix = 'https://image.tmdb.org/t/p/';

export default {
  Query: {
    nowPlaying: nowPlaying,
    movie: movieById,
  },
  Movie: {
    posterPath: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w500${parent.poster_path}`;
    },
    posterPathW92: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w92${parent.poster_path}`;
    },
    posterPathW154: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w154${parent.poster_path}`;
    },
    posterPathW185: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w185${parent.poster_path}`;
    },
    posterPathW342: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w342${parent.poster_path}`;
    },
    posterPathW780: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w780${parent.poster_path}`;
    },
    backdropPathW300: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w300${parent.backdrop_path}`;
    },
    backdropPathW780: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w780${parent.backdrop_path}`;
    },
    backdropPathW1280: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w1280${parent.backdrop_path}`;
    },
    voteAverage: (parent: any, args: any, context: any): String => {
      return `${parent.vote_average}`;
    },
    releaseDate: (parent: any, args: any, context: any): String => {
      return `${parent.release_date}`;
    },

    trailer: async (
      parent: any,
      args: any,
      context: any
    ): Promise<Trailer | undefined> => {
      return await trailer(parent.id);
    },

    credits: async (
      parent: any,
      args: any,
      context: any
    ): Promise<Credits | undefined> => {
      return await credits(parent.id);
    },
    genres: (parent: any, args: any, context: any): String[] => {
      return parent.genres.map((genre: { name: any }) => {
        return genre.name;
      });
    },
    productionCountries: (parent: any, args: any, context: any): String[] => {
      return parent.production_countries.map((company: { iso_3166_1: any }) => {
        return company.iso_3166_1;
      });
    },
  },
  Cast: {
    profilePath: (parent: any, args: any, context: any): String => {
      if (parent.profile_path == null) {
        return '';
      }
      return `${imageURLPrefix}w92${parent.profile_path}`;
    },
  },
  MovieSummary: {
    details: (parent: any, args: any, context: any): Promise<Movie> => {
      return getMovie(parent.id);
    },
    posterPath: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w500${parent.poster_path}`;
    },
    posterPathW92: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w92${parent.poster_path}`;
    },
    posterPathW154: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w154${parent.poster_path}`;
    },
    posterPathW185: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w185${parent.poster_path}`;
    },
    posterPathW342: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w342${parent.poster_path}`;
    },
    posterPathW780: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w780${parent.poster_path}`;
    },
    backdropPathW300: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w300${parent.backdrop_path}`;
    },
    backdropPathW780: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w780${parent.backdrop_path}`;
    },
    backdropPathW1280: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w1280${parent.backdrop_path}`;
    },
    voteAverage: (parent: any, args: any, context: any): String => {
      return `${parent.vote_average}`;
    },
    trailer: async (
      parent: any,
      args: any,
      context: any
    ): Promise<Trailer | undefined> => {
      return await trailer(parent.id);
    },

    credits: async (
      parent: any,
      args: any,
      context: any
    ): Promise<Credits | undefined> => {
      return await credits(parent.id);
    },
  },
};
