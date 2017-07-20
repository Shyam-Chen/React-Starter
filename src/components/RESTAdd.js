import React, { Component } from 'react';

import { Button, Input } from 'semantic-ui-react';

export class RESTAdd extends Component {
  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const { value } = this.props;

    if (value.foo && value.bar) {
      this.props.actions.onAddItem(value.foo, value.bar);
      value.foo = '';
      value.bar = '';
    }
  }

  render() {
    const { value, valueActions } = this.props;

    return (
      <div>
        <Input value={ value.foo } onChange={ event => valueActions.onChangeFoo(event.target.value) } />
        { ' - ' }
        <Input value={ value.bar } onChange={ event => valueActions.onChangeBar(event.target.value) } />
        { ' ' }
        <Button basic color="black" onClick={ this.onAdd }>Add</Button>
      </div>
    );
  }
}
