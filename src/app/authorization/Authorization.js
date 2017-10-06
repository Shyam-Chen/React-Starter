import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';

const Authorization = () => {

  return (
    <div>
      <Navigation />

      <div>TODO: Authorization Page</div>
    </div>
  );
};

export default connect(
  ({ authorization }) => ({ authorization }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Authorization);
