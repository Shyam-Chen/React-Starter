import React, { Component } from 'react';

import { Button, Input } from 'semantic-ui-react';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const { text } = this.state;

    if (text) {
      this.props.actions.onAdd(text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div>
        <Input value={ this.state.text } onChange={ event => this.setState({ text: event.target.value }) } />
        { ' ' }
        <Button basic color="black" onClick={ this.onAdd }>Add</Button>
      </div>
    );
  }
}
