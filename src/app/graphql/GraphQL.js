import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from './actions';
import GraphQLApp from './GraphQLApp';

const GraphQL = () => (
  <div>
    <ApolloProvider client={client}>
      <GraphQLApp />
    </ApolloProvider>
  </div>
);

export default GraphQL;
