import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            : <Link to="/" onClick={() => actions.push('/')} style={{ textDecoration: 'none' }}>
                <IconButton color="contrast" >
                  <Icon>arrow_back</Icon>
                </IconButton>
              </Link>
        }
        <Typography type="title" color="inherit">
          React by Example, location: <span className="location">{router.location.pathname}</span>.
        </Typography>
      </Toolbar>
    </AppBar>

    {
      router.location.pathname === '/'
        ? <div className="buttons">
            <Link to="/counter" onClick={() => actions.push('/counter')} style={{ textDecoration: 'none', marginRight: '.5rem' }}>
              <VariantButton raised variant="teal" text="Counter" />
            </Link>

            <Link to="/crud" onClick={() => actions.push('/crud')} style={{ textDecoration: 'none', marginRight: '.5rem' }}>
              <VariantButton raised variant="teal" text="CRUD" />
            </Link>

            <Link to="/rest" onClick={() => actions.push('/rest')} style={{ textDecoration: 'none', marginRight: '.5rem' }}>
              <VariantButton raised variant="teal" text="REST" />
            </Link>

            <Link to="/graphql" onClick={() => actions.push('/graphql')} style={{ textDecoration: 'none', marginRight: '.5rem' }}>
              <VariantButton raised variant="teal" text="GraphQL" />
            </Link>

            <Link to="/data-table" onClick={() => actions.push('/data-table')} style={{ textDecoration: 'none', marginRight: '.5rem' }}>
              <VariantButton raised variant="teal" text="Data Table" />
            </Link>

            <Link to="/form-controls" onClick={() => actions.push('/form-controls')} style={{ textDecoration: 'none' }}>
              <VariantButton raised variant="teal" text="Form Controls" />
            </Link>
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

      .buttons {
        display: inline-flex;
        margin-top: 64px;
      }
    `}</style>
  </div>
);

export default connect(
  ({ router }) => ({ router }),
  dispatch => ({ actions: bindActionCreators(routerActions, dispatch) })
)(Navigation);
