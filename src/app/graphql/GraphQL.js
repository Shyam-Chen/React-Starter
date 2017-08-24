import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Button } from 'material-ui';

const GraphQL = () => (
  <div>
    <Button>GraphQL</Button>
  </div>
);

export default connect(
  // ({ graphql }) => ({ graphql }),
  // dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(GraphQL);
