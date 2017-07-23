import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';

import * as actions from '../actions/crud';

export const CRUD = ({ crud, actions }) => {
  return (
    <div>
      <Button basic color="black" onClick={ actions.onSearch }>Search</Button>

      <ul>
        {
          crud.map((item) => (
            <li key={ item._id }>{ item.text }</li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = ({ crud }) => ({
  crud
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CRUD);
