import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as restActions from '../actions/rest';
import * as modalActions from '../actions/modal';

import { RESTAdd } from '../components/RESTAdd';
import { RESTDelete } from '../components/RESTDelete';
import { RESTEdit } from '../components/RESTEdit';
import { RESTSearch } from '../components/RESTSearch';

const REST = ({ rest, actions, modalActions }) => (
  <div>
    <RESTSearch actions={ actions } />
    <RESTAdd actions={ actions } />

    <ul>
      {
        rest.map((item) => (
          <li key={ item.id }>
            { item.foo } - { item.bar } { ' ' }
            <RESTDelete id={ item.id } actions={ actions } modalActions={ modalActions } />
            <RESTEdit id={ item.id } foo={ item.foo } bar={ item.bar } actions={ actions } modalActions={ modalActions } />
          </li>
        ))
      }
    </ul>
  </div>
);

const mapStateToProps = ({ rest }) => ({
  rest
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(restActions, dispatch),
  modalActions: bindActionCreators(modalActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(REST);
