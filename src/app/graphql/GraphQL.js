import React from 'react';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import GraphQLApp from './GraphQLApp';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://web-go-demo.herokuapp.com/__/graphql'
  })
});

const GraphQL = () => (
  <div>
    <ApolloProvider client={client}>
      <GraphQLApp />
    </ApolloProvider>
  </div>
);

export default GraphQL;
