import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    overview: String
    posterPath: String
  }

  type Query {
    nowPlaying: [Movie]
    movie(id: ID!): Movie
  }
`;
