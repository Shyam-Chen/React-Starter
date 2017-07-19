import React, { Component } from 'react';

import { Button, Input } from 'semantic-ui-react';

export class RESTAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: '',
      bar: ''
    };

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const { foo, bar } = this.state;

    if (foo && bar) {
      this.props.actions.onAddItem(foo, bar);
      this.setState({ foo: '', bar: '' });
    }
  }

  render() {
    return (
      <div>
        <Input value={ this.state.foo } onChange={ event => this.setState({ foo: event.target.value }) } />
        { ' - ' }
        <Input value={ this.state.bar } onChange={ event => this.setState({ bar: event.target.value }) } />
        { ' ' }
        <Button onClick={ this.onAdd }>Add</Button>
      </div>
    );
  }
}
