import React, { Component } from 'react';

import { Button, Input } from 'semantic-ui-react';

export class RESTSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: '',
      bar: ''
    };

    this.search = this.search.bind(this);
  }

  search() {
    const { foo, bar } = this.state;

    this.props.actions.onSearchItem(foo, bar);
  }

  render() {
    const { foo, bar } = this.state;

    return (
      <div>
        <Input value={ foo } onChange={ event => this.setState({ foo: event.target.value }) } />
        { ' - ' }
        <Input value={ bar } onChange={ event => this.setState({ bar: event.target.value }) } />
        { ' ' }
        <Button basic color="black" onClick={ this.search }>Search</Button>
      </div>
    )
  }
}
