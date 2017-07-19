import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as restActions from '../actions/rest';

import { RESTAdd } from '../components/RESTAdd';
import { RESTDelete } from '../components/RESTDelete';
import { RESTEdit } from '../components/RESTEdit';
import { RESTSearch } from '../components/RESTSearch';

const REST = ({ rest, actions }) => (
  <div>
    <RESTSearch actions={ actions } />
    <RESTAdd actions={ actions } />

    <ul>
      {
        rest.map((item) => (
          <li key={ item.id }>
            { item.foo } - { item.bar } { ' ' }
            <RESTDelete id={ item.id } actions={ actions } />
            <RESTEdit id={ item.id } foo={ item.foo } bar={ item.bar } actions={ actions } />
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
  actions: bindActionCreators(restActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(REST);
