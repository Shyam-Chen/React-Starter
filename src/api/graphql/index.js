import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import { helloWorldTypeDefs, helloWorldResolvers } from './hello-world';

const typeDefs = mergeTypes([
  helloWorldTypeDefs,
], { all: true });

const resolvers = mergeResolvers([
  helloWorldResolvers,
]);

export default makeExecutableSchema({ typeDefs, resolvers });
