import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { ApolloClient, createNetworkInterface } from 'react-apollo';

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
