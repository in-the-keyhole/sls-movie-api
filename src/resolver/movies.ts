import {
  getMovies,
  getMovie,
  Movie,
  MovieSummary,
  getTrailer,
  Trailer,
  Credits,
  getCredits,
  //getGenres,
  //getProductionCompanies
} from './rest-access';

export const nowPlaying = async (_: any) => {
  return await getMovies();
};

export const movieById = async (_: any, { id }: Movie) => {
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
/*
export const genres = async (movieId: string): Promise<String | undefined> => {
  return await getGenres(movieId);
};*/
/*
export const productionCompanies = async (movieId: string): Promise<String | undefined> => {
  return await getProductionCompanies(movieId);
};*/
