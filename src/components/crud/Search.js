import React, { Component } from 'react';

import { Button, Input } from 'semantic-ui-react';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: '',
      accent: ''
    };

    this.search = this.search.bind(this);
  }

  search() {
    const { primary, accent } = this.state;

    this.props.actions.onSearchItem(primary, accent);
  }

  render() {
    const { primary, accent } = this.state;

    return (
      <div>
        <Input value={ primary } onChange={ event => this.setState({ primary: event.target.value }) } />
        { ' - ' }
        <Input value={ accent } onChange={ event => this.setState({ accent: event.target.value }) } />
        { ' ' }
        <Button basic color="black" onClick={ this.search }>Search</Button>
      </div>
    );
  }
}
