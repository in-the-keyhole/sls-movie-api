import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    overview: String
    posterPath: String
  }

  type Status {
    message: String
  }

  type Mutation {
    resetData: Status
  }

  type Query {
    nowPlaying: [Movie]
    movie(id: ID!): Movie
  }
`;
