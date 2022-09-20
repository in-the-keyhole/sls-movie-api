import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    overview: String
    images: Images
    voteAverage: Float
    trailer: Trailer
    credits: Credits
    tagline: String
    runtime: Float
    releaseDate: String
    genres: [String]
    productionCountries: [String]
  }

  type MovieSummary {
    id: Int
    title: String
    overview: String
    releaseDate: String
    images: Images
    voteAverage: Float
    trailer: Trailer
    credits: Credits
    details: Movie
  }

  type Trailer {
    link: String
    size: Int
  }

  type Status {
    message: String
  }

  type Mutation {
    resetData: Status
  }

  type Query {
    nowPlaying: [MovieSummary]
    movie(id: ID!): Movie
  }

  type Credits {
    id: ID!
    cast: [Cast]
    crew: [Crew]
  }

  type Cast {
    id: ID!
    name: String
    character: String
    profilePath: String
  }

  type Crew {
    id: ID!
    name: String
    job: String
    profilePath: String
  }

  type Images {
    posterPath: String
    posterPathW92: String
    posterPathW154: String
    posterPathW185: String
    posterPathW342: String
    posterPathW780: String
    backdropPathW300: String
    backdropPathW780: String
    backdropPathW1280: String
  }
`;
