import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';
import { Add, Search, Edit, Delete, Results } from './views';

const REST = ({ rest }) => {
  const { loading } = rest;

  return (
    <div className="container">
      <Navigation />

      <Search />
      <Add />

      <Results />

      <aside>
        <Delete />
        <Edit />

        <div className="progress" style={{ display: loading ? '' : 'none' }}>
          <CircularProgress />
        </div>
      </aside>

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .progress {
          position: absolute;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(225, 225, 255, .7);
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1111;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(REST);
