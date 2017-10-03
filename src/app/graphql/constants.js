import { ApolloClient, createNetworkInterface } from 'react-apollo';

export const CLIENT = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://web-go-demo.herokuapp.com/__/graphql'
  })
});

export const INITIAL = {
  dataset: []
};

export const SUCCESS = '[GraphQL] SUCCESS';
export const FAILURE = '[GraphQL] FAILURE';

export const SET_DATA = '[GraphQL] SET_DATA';
