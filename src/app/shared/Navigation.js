import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routerActions } from 'react-router-redux';
import { AppBar, Toolbar, IconButton, Icon, Typography } from 'material-ui';

import VariantButton from '~/shared/VariantButton';

const Navigation = (/* { router, actions } */) => {
  const inlineStyles = {
    link: { textDecoration: 'none' }
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          {
            // router.location.pathname === '/'
            location.pathname === '/'
              ? <IconButton color="contrast" aria-label="Menu">
                  <Icon>toys</Icon>
                </IconButton>
              : // <Link to="" onClick={() => actions.goBack()} style={inlineStyles.link}>
                <Link to="" onClick={() => history.back()} style={inlineStyles.link}>
                  <IconButton color="contrast" >
                    <Icon>arrow_back</Icon>
                  </IconButton>
                </Link>
          }
          <Typography type="title" color="inherit">
            {/* React by Example, location: <span className="location">{router.location.pathname}</span>. */}
            React by Example, location: <span className="location">{location.pathname}</span>.
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="filling"></div>

      {
        // router.location.pathname === '/'
        location.pathname === '/'
          ? <div className="buttons">
              {/* <Link to="/counter" onClick={() => actions.push('/counter')} style={inlineStyles.link}> */}
              <Link to="/counter" style={inlineStyles.link}>
                <VariantButton raised variant="teal" text="Counter" />
              </Link>
              {'　'}
              {/* <Link to="/crud" onClick={() => actions.push('/crud')} style={inlineStyles.link}> */}
              <Link to="/crud" style={inlineStyles.link}>
                <VariantButton raised variant="teal" text="CRUD" />
              </Link>
              {'　'}
              {/* <Link to="/rest" onClick={() => actions.push('/rest')} style={inlineStyles.link}> */}
              <Link to="/rest" style={inlineStyles.link}>
                <VariantButton raised variant="teal" text="REST" />
              </Link>
              {'　'}
              {/* <Link to="/graphql" onClick={() => actions.push('/graphql')} style={inlineStyles.link}> */}
              <Link to="/graphql" style={inlineStyles.link}>
                <VariantButton raised variant="teal" text="GraphQL" />
              </Link>
              {'　'}
              {/* <Link to="/form-controls" onClick={() => actions.push('/form-controls')} style={inlineStyles.link}> */}
              <Link to="/form-controls" style={inlineStyles.link}>
                <VariantButton raised variant="teal" text="Form Controls" />
              </Link>
              {'　'}
              {/* <Link to="/data-table" onClick={() => actions.push('/data-table')} style={inlineStyles.link}> */}
              <Link to="/data-table" style={inlineStyles.link}>
                <VariantButton raised variant="teal" text="Data Table" />
              </Link>
              {'　'}
              {/* <Link to="/authorization" onClick={() => actions.push('/authorization')} style={inlineStyles.link}> */}
              <Link to="/authorization" style={inlineStyles.link}>
                <VariantButton raised variant="teal" text="Authorization" />
              </Link>
            </div>
          : void 0
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
};

export default connect(
  ({ router }) => ({ router }),
  dispatch => ({ actions: bindActionCreators(routerActions, dispatch) })
)(Navigation);
