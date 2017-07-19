import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as restActions from '../actions/rest';

class REST extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rest, actions } = this.props;

    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = ({ rest }) => ({
  rest
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(restActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(REST)
