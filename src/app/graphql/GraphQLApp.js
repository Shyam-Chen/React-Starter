import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Paper } from 'material-ui';

import Navigation from '~/shared/Navigation';

const GraphQLApp = ({ data: { list } }) => {

  return (
    <div className="container">
      <Navigation />

      <Paper>
        {
          list
            ? <ul>
                {
                  list.map(item => (
                    <li key={item._id}>
                      {item.text}
                    </li>
                  ))
                }
              </ul>
            : <p>Loading ...</p>
        }
      </Paper>

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .table {
          max-width: 30rem;
          margin: .5rem 0;
        }
      `}</style>
    </div>
  );
}

export default graphql(gql`
  {
    list {
      _id
      text
    }
  }
`)(GraphQLApp);
