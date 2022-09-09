import { Http } from './http';
import { environment } from '../environment';
import { logger } from '../logger';

const tmdbApiLogger = logger.child({ api: 'tmdb' });

const http = new Http(environment.tmdb.url);

export const getMovies = async (): Promise<Movie[]> => {
    const url_string: string = '/movie/now_playing'
    const { data } = await http.get(url_string);
    return data.results;
}

export const getMovie = async (id: String): Promise<Movie> => {
    const url_string: string = `/movie/${id}`
    const { data } = await http.get(url_string);
    return data;
}

export const getTrailer = async (id: String): Promise<Trailer> => {
    const url_string: string = `/movie/${id}/videos`
    const { data } = await http.get(url_string);
    const firstOfficialTrailer = data.results.find((video: { official: any; type: string; }) => {
        return video.official && video.type === 'Trailer'
    });
    const link = createTrailerLink(firstOfficialTrailer);
    return { link: link, size: firstOfficialTrailer.size };
}

const createTrailerLink = (trailer: { site: string, key: string }): string => {
    let siteUrlPrefix = ''
    switch (trailer.site) {
        case 'YouTube': {
            siteUrlPrefix = 'https://www.youtube.com/watch?v=';
            break;
        }
        case 'Vimeo': {
            siteUrlPrefix = 'https://vimeo.com/';
            break;
        }
        default: {
            break;
        }
    }
    return `${siteUrlPrefix}${trailer.key}`;
}

export interface Movie {
    id: string,
    title: string,
    overview: string,
    posterPath: string,
    posterPathW92: string,
    posterPathW154: string,
    posterPathW185: string,
    posterPathW342: string,
    posterPathW780: string,
    backdropPathW300: string,
    backdropPathW780: string,
    backdropPathW1280: string,
    voteAverage: number,
}

export interface Trailer {
    link: string,
    size: number
}
