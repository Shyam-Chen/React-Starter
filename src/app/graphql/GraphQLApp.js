import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Paper } from 'material-ui';

function GraphQLApp({ data: { list } }) {
  console.log(list);

  return (
    <div>
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
            : void 0
        }
      </Paper>
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
