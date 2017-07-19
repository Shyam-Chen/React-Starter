import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Input } from 'semantic-ui-react';

import * as restActions from '../actions/rest';

import { RESTAdd } from '../components/RESTAdd';
import { RESTDelete } from '../components/RESTDelete';
import { RESTEdit } from '../components/RESTEdit';

const REST = ({ rest, actions }) => {
  return (
    <div>
      <div>
        <Input />
        { ' - ' }
        <Input />
        { ' ' }
        <Button>Search</Button>
      </div>

      <Button onClick={ actions.onGetList }>Get List</Button>

      <RESTAdd actions={ actions } />

      <ul>
        {
          rest.map((item) => (
            <li key={ item.id }>
              { item.foo } - { item.bar } { ' ' }
              <RESTDelete id={ item.id } actions={ actions } />
              <RESTEdit />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

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
