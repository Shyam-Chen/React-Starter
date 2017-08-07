import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Input } from 'semantic-ui-react';

import * as actions from '../actions';

const Search = ({ rest, actions }) => {
  const { text } = rest.searchData;

  const onSearch = () => {
    actions.onSearch(text);
    actions.onSetSearch('');
  };

  return (
    <div>
      <Input value={ text } onChange={ event => {
        actions.onSetSearch(event.target.value);
      } } />
      { ' ' }
      <Button basic color="black" onClick={ onSearch }>Search</Button>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Search);
