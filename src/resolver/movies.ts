import { getMovies, getMovie, Movie, getTrailer, Trailer } from './rest-access';

export const nowPlaying = async (_: any) => {
    return await getMovies();
}

export const movieById = async (_: any, { id }: Movie) => {
    return await getMovie(id);
}

export const trailer = async (id: string): Promise<Trailer | undefined> => {
    return await getTrailer(id);
}