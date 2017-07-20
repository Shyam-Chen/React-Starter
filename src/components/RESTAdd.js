import React from 'react';

import { Button, Input } from 'semantic-ui-react';

export const RESTAdd = ({ actions, value, valueActions }) => {
  const onAdd = () => {
    if (value.addValue.foo && value.addValue.bar) {
      actions.onAddItem(value.addValue.foo, value.addValue.bar);
      value.addValue.foo = '';
      value.addValue.bar = '';
    }
  };

  return (
    <div>
      <Input value={ value.addValue.foo } onChange={ event => valueActions.onChangeFoo(event.target.value) } />
      { ' - ' }
      <Input value={ value.addValue.bar } onChange={ event => valueActions.onChangeBar(event.target.value) } />
      { ' ' }
      <Button basic color="black" onClick={ onAdd }>Add</Button>
    </div>
  );
};
