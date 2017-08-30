import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux'
import { Typography, Button, Divider } from 'material-ui';
import { withRouter } from 'react-router-dom';

const Navigation = ({ actions }) => (
  <div>
    <div className="header">
      <Typography type="headline" component="h3">
        React by Example
      </Typography>
    </div>

    <Button raised color="primary" href="/counter" onClick={() => actions.push('/counter')}>Counter</Button> {' '}
    <Button raised color="primary" href="/crud" onClick={() => actions.push('/crud')}>CRUD</Button> {' '}
    <Button raised color="primary" href="/rest" onClick={() => actions.push('/rest')}>REST</Button> {' '}
    <Button raised color="primary" href="/graphql" onClick={() => actions.push('/graphql')}>GraphQL</Button> {' '}

    <div className="divider">
      <Divider />
    </div>

    <style jsx>{`
      .header {
        margin: .5rem 0;
      }

      .divider {
        margin: 1rem 0;
      }
    `}</style>
  </div>
);

export default withRouter(connect(
  ({ router }) => ({ router }),
  dispatch => ({ actions: bindActionCreators(routerActions, dispatch) })
)(Navigation));
