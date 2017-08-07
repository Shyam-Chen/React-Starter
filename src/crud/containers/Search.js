import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Input } from 'semantic-ui-react';

import * as actions from '../actions';

const Search = ({ crud, actions }) => {
  const { primary, accent } = crud.searchData;

  const onSearch = () => {
    actions.onSearchItem(primary, accent);
    actions.onSetSearch('', '');
  };

  return (
    <div>
      <Input value={ primary } onChange={ event => {
        actions.onSetSearch(event.target.value, accent);
      } } />
      { ' - ' }
      <Input value={ accent } onChange={ event => {
        actions.onSetSearch(primary, event.target.value);
      } } />
      { ' ' }
      <Button basic color="black" onClick={ onSearch }>Search</Button>
    </div>
  );
};

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Search);
