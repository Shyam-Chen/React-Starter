import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { Typography, Divider } from 'material-ui';

import VariantRaisedButton from '~/shared/VariantRaisedButton';

const Navigation = ({ router, actions }) => (
  <div>
    <div className="header">
      <Typography type="headline" component="h3">
        React by Example, location: <span className="location">{router.location.pathname}</span>
      </Typography>
    </div>

    <div className="button-group">
      <div className="button">
        <VariantRaisedButton variant="teal" text="Counter" href="/counter" onClick={() => actions.push('/counter')} />
      </div>

      <div className="button">
        <VariantRaisedButton variant="teal" text="CRUD" href="/crud" onClick={() => actions.push('/crud')} />
      </div>

      <div className="button">
        <VariantRaisedButton variant="teal" text="REST" href="/rest" onClick={() => actions.push('/rest')} />
      </div>

      <div className="button">
        <VariantRaisedButton variant="teal" text="GraphQL" href="/graphql" onClick={() => actions.push('/graphql')} />
      </div>

      <div className="button">
        <VariantRaisedButton variant="teal" text="Data Table" href="/data-table" onClick={() => actions.push('/data-table')} />
      </div>

      <div className="button">
        <VariantRaisedButton variant="teal" text="Form Controls" href="/form-controls" onClick={() => actions.push('/form-controls')} />
      </div>
    </div>

    <div className="divider">
      <Divider />
    </div>

    <style jsx>{`
      .header {
        margin: 0 0 .5rem 0;
      }

      .location {
        color: #E91E63;
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

export default connect(
  ({ router }) => ({ router }),
  dispatch => ({ actions: bindActionCreators(routerActions, dispatch) })
)(Navigation);
