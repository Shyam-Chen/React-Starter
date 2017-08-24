import { ApolloClient, createNetworkInterface } from 'react-apollo';

import { GRAPHQL_URI } from './constants';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: GRAPHQL_URI })
});
