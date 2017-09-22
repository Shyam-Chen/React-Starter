import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { gql, graphql } from 'react-apollo';
import { TextField, Paper, Button } from 'material-ui';
import { LinearProgress } from 'material-ui/Progress';

import Navigation from '~/shared/Navigation';

const GraphQLApp = ({ data: { list } }) => {

  return (
    <div className="container">
      <Navigation />

      <TextField />

      <Paper>
        {
          list
            ? <ul>
                {
                  list.map(item => (
                    <li key={item._id}>
                      {item.text}
                      <Button>Delete</Button>
                      <Button>Edit</Button>
                    </li>
                  ))
                }
              </ul>
            : <div className="progress">
                <LinearProgress />
              </div>
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

        .progress {
          margin: .5rem 0;
        }
      `}</style>
    </div>
  );
}


export const getList = graphql(gql`
  {
    list {
      _id
      text
    }
  }
`)(GraphQLApp);

export const searchList = graphql(gql`
  {
    list(text: "a") {
      _id
      text
    }
  }
`)(GraphQLApp);

export default graphql(gql`
  {
    list {
      _id
      text
    }
  }
`)(GraphQLApp);

// export default connect(
//
// )(GraphQLApp);
