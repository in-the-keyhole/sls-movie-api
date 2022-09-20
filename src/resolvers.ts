import { nowPlaying, movieById, trailer, credits } from './resolver/movies';
import {
  Credits,
  getMovie,
  Movie,
  Images,
  Trailer,
} from './resolver/rest-access';

const imageURLPrefix = 'https://image.tmdb.org/t/p/';

export default {
  Query: {
    nowPlaying: nowPlaying,
    movie: movieById,
  },
  Movie: {
    voteAverage: (parent: any, args: any, context: any): String => {
      return `${parent.vote_average}`;
    },
    releaseDate: (parent: any, args: any, context: any): String => {
      return parent.release_date;
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
    images: (parent: any, args: any, context: any): Images => {
      return {
        posterPath: parent.poster_path,
        backdropPath: parent.backdrop_path,
      };
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
  Images: {
    posterPath: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w500${parent.posterPath}`;
    },
    posterPathW92: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w92${parent.posterPath}`;
    },
    posterPathW154: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w154${parent.posterPath}`;
    },
    posterPathW185: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w185${parent.posterPath}`;
    },
    posterPathW342: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w342${parent.posterPath}`;
    },
    posterPathW780: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w780${parent.posterPath}`;
    },
    backdropPathW300: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w300${parent.backdropPath}`;
    },
    backdropPathW780: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w780${parent.backdropPath}`;
    },
    backdropPathW1280: (parent: any, args: any, context: any): String => {
      return `${imageURLPrefix}w1280${parent.backdropPath}`;
    },
  },
  MovieSummary: {
    details: (parent: any, args: any, context: any): Promise<Movie> => {
      return getMovie(parent.id);
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

    images: (parent: any, args: any, context: any): Images => {
      return {
        posterPath: parent.poster_path,
        backdropPath: parent.backdrop_path,
      };
    },
    releaseDate: (parent: any, args: any, context: any): String => {
      return parent.release_date;
    }
  },
};
