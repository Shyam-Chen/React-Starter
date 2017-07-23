import React, { Component } from 'react';

import { Button, Input } from 'semantic-ui-react';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: '',
      accent: ''
    };

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const { primary, accent } = this.state;

    if (primary && accent) {
      this.props.actions.onAddItem(primary, accent);
      this.setState({ primary: '', accent: '' });
    }
  }

  render() {
    return (
      <div>
        <Input value={ this.state.primary } onChange={ event => this.setState({ primary: event.target.value }) } />
        { ' - ' }
        <Input value={ this.state.accent } onChange={ event => this.setState({ accent: event.target.value }) } />
        { ' ' }
        <Button basic color="black" onClick={ this.onAdd }>Add</Button>
      </div>
    );
  }
}
