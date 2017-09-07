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

    <div className="button-group">
      <div className="button">
        <Button raised href="/counter" onClick={() => actions.push('/counter')}>Counter</Button>
      </div>

      <div className="button">
        <Button raised href="/crud" onClick={() => actions.push('/crud')}>CRUD</Button>
      </div>

      <div className="button">
        <Button raised href="/rest" onClick={() => actions.push('/rest')}>REST</Button>
      </div>

      <div className="button">
        <Button raised href="/graphql" onClick={() => actions.push('/graphql')}>GraphQL</Button>
      </div>
    </div>

    <div className="divider">
      <Divider />
    </div>

    <style jsx>{`
      .header {
        margin: .5rem 0;
      }

      .button-group {
        display: inline-flex;
      }

      .button:not(:last-child) {
        margin-right: .5rem;
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
