import { ApolloClient, createNetworkInterface } from 'react-apollo';

export const CLIENT = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `${process.env.API_URL}/__/graphql`
  })
});

export const INITIAL = {
  dataset: [],
  addData: { text: '' },
  searchData: { text: '' },
  editData: { _id: 0, text: '', dialog: false },
  deleteData: { _id: 0, dialog: false },
  loading: false
};

export const SUCCESS = '[GraphQL] SUCCESS';
export const FAILURE = '[GraphQL] FAILURE';

export const SET_DATA = '[GraphQL] SET_DATA';
