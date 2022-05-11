import { getMovies, getMovie, Movie } from './data-access';

export const nowPlaying = async (_: any) => {
    return await getMovies();
}

export const movieById = async (_: any, { id }: Movie) => {
    return await getMovie(id);
}