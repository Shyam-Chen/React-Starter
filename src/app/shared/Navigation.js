import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { AppBar, Toolbar, IconButton, Icon, Typography } from 'material-ui';

import Link from '~/shared/Link';
import Button from '~/shared/Button';

export const Navigation = () => (
  <div>
    <AppBar>
      <Toolbar>
        {
          window.location.pathname === '/'
            ? (
              <IconButton style={{ color: '#fff' }}>
                <Icon>toys</Icon>
              </IconButton>
            )
            : (
              <Link to="/" href="/">
                <IconButton style={{ color: '#fff' }}>
                  <Icon>arrow_back</Icon>
                </IconButton>
              </Link>
            )
        }
        <Typography variant="title" color="inherit">
          React by Example, location: <span className="location">{window.location.pathname}</span>.
        </Typography>
      </Toolbar>
    </AppBar>

    <div className="filling" />

    {
      window.location.pathname === '/' &&
      <div className="buttons">
        <Link to="/counter" href="/counter">
          <Button raised color="teal">Counter</Button>
        </Link>
        {'　'}
        <Link to="/crud" href="/crud">
          <Button raised color="teal">CRUD</Button>
        </Link>
        {'　'}
        <Link to="/rest" href="/rest">
          <Button raised color="teal">REST</Button>
        </Link>
        {'　'}
        <Link to="/graphql" href="/graphql">
          <Button raised color="teal">GraphQL</Button>
        </Link>
        {'　'}
        <Link to="/form-controls" href="/form-controls">
          <Button raised color="teal">Form Controls</Button>
        </Link>
        {'　'}
        <Link to="/data-table" href="data-table">
          <Button raised color="teal">Data Table</Button>
        </Link>
        {'　'}
        <Link to="/authorization" href="authorization">
          <Button raised color="teal">Authorization</Button>
        </Link>
      </div>
    }

    <style jsx>{`
      .location {
        color: #F48FB1;
      }

      .filling {
        padding-top: 64px;
      }

      .buttons {
        display: inline-flex;
      }
    `}</style>
  </div>
);

export const mapStateToProps = ({ router }) => ({
  router,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(routerActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
