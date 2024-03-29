import {
  getMovies,
  getMovie,
  Movie,
  MovieSummary,
  getTrailer,
  Trailer,
  Credits,
  getCredits,
} from './rest-access';

export const nowPlaying = async (_: any) => {
  return await getMovies();
};

export const movieById = async (_: any, { id }: Movie): Promise<Movie> => {
  return await getMovie(id);
};

export const trailer = async (
  movieId: string
): Promise<Trailer | undefined> => {
  return await getTrailer(movieId);
};

export const credits = async (
  movieId: string
): Promise<Credits | undefined> => {
  return await getCredits(movieId);
};
