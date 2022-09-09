
import { ApolloServer } from 'apollo-server-lambda';
import { environment } from './environment';

import { typeDefs } from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
});

export const graphqlHandler = server.createHandler();
