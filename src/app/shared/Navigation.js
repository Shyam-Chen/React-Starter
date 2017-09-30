import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { AppBar, Toolbar, IconButton, Icon, Typography, Divider } from 'material-ui';

import VariantButton from '~/shared/VariantButton';

const Navigation = ({ router, actions }) => (
  <div>
    <AppBar>
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <Icon>toys</Icon>
        </IconButton>
        <Typography type="title" color="inherit">
          React by Example, location: <span className="location">{router.location.pathname}</span>.
        </Typography>
      </Toolbar>
    </AppBar>

    <div className="button-group">
      <div className="button">
        <VariantButton raised variant="teal" text="Counter" href="/counter" onClick={() => actions.push('/counter')} />
      </div>

      <div className="button">
        <VariantButton raised variant="teal" text="CRUD" href="/crud" onClick={() => actions.push('/crud')} />
      </div>

      <div className="button">
        <VariantButton raised variant="teal" text="REST" href="/rest" onClick={() => actions.push('/rest')} />
      </div>

      <div className="button">
        <VariantButton raised variant="teal" text="GraphQL" href="/graphql" onClick={() => actions.push('/graphql')} />
      </div>

      <div className="button">
        <VariantButton raised variant="teal" text="Data Table" href="/data-table" onClick={() => actions.push('/data-table')} />
      </div>

      <div className="button">
        <VariantButton raised variant="teal" text="Form Controls" href="/form-controls" onClick={() => actions.push('/form-controls')} />
      </div>
    </div>

    <div className="divider">
      <Divider />
    </div>

    <style jsx>{`
      .location {
        color: #F48FB1;
      }

      .button-group {
        display: inline-flex;
        margin-top: 64px;
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
