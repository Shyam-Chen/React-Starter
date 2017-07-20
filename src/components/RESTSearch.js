import React from 'react';

import { Button, Input } from 'semantic-ui-react';

export const RESTSearch = ({ actions, value, valueActions }) => {
  const onSearch = () => {
    actions.onSearchItem(value.searchValue.foo, value.searchValue.bar);
  };

  return (
    <div>
      <Input value={ value.searchValue.foo } onChange={ event => valueActions.onChangeSearchFoo(event.target.value) } />
      { ' - ' }
      <Input value={ value.searchValue.bar } onChange={ event => valueActions.onChangeSearchBar(event.target.value) } />
      { ' ' }
      <Button basic color="black" onClick={ onSearch }>Search</Button>
    </div>
  );
};
