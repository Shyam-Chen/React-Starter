import React, { Component } from 'react';

import { Button, Input } from 'semantic-ui-react';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.search = this.search.bind(this);
  }

  search() {
    this.props.actions.onSearch(this.state.text);
  }

  render() {

    return (
      <div>
        <Input value={ this.state.text } onChange={ event => this.setState({ text: event.target.value }) } />
        { ' ' }
        <Button basic color="black" onClick={ this.search }>Search</Button>
      </div>
    );
  }
}
