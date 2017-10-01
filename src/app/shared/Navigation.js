import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { AppBar, Toolbar, IconButton, Icon, Typography } from 'material-ui';

import VariantButton from '~/shared/VariantButton';

const Navigation = ({ router, actions }) => (
  <div className="container">
    <AppBar>
      <Toolbar>
        {
          router.location.pathname === '/'
            ? <IconButton color="contrast" aria-label="Menu">
                <Icon>toys</Icon>
              </IconButton>
            : <IconButton color="contrast" href="/" onClick={() => actions.push('/')} aria-label="Menu">
                <Icon>arrow_back</Icon>
              </IconButton>
        }
        <Typography type="title" color="inherit">
          React by Example, location: <span className="location">{router.location.pathname}</span>.
        </Typography>
      </Toolbar>
    </AppBar>

    {
      router.location.pathname === '/'
        ? <div className="button-group">
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
        : void 0
    }

    <style jsx>{`
      .container {
        margin-bottom: 64px;
      }

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
    `}</style>
  </div>
);

export default connect(
  ({ router }) => ({ router }),
  dispatch => ({ actions: bindActionCreators(routerActions, dispatch) })
)(Navigation);
