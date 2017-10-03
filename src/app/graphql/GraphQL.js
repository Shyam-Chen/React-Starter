import React from 'react';
import { ApolloClient, createNetworkInterface, /* ApolloProvider */ } from 'react-apollo';

import QueryMutation from './query-mutation/QueryMutation';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://web-go-demo.herokuapp.com/__/graphql'
  })
});

const GraphQL = () => (
  <div>
    {/* <ApolloProvider client={client}> */}
      <QueryMutation />
    {/* </ApolloProvider> */}
  </div>
);

export default GraphQL;
