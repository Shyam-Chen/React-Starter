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

// -

// import React from 'react';
//
// import { Button, Input } from 'semantic-ui-react';
//
// export const RESTSearch = ({ actions, value, valueActions }) => {
//   const onSearch = () => {
//     actions.onSearchItem(value.searchValue.foo, value.searchValue.bar);
//   };
//
//   return (
//     <div>
//       <Input value={ value.searchValue.foo } onChange={ event => valueActions.onChangeSearchFoo(event.target.value) } />
//       { ' - ' }
//       <Input value={ value.searchValue.bar } onChange={ event => valueActions.onChangeSearchBar(event.target.value) } />
//       { ' ' }
//       <Button basic color="black" onClick={ onSearch }>Search</Button>
//     </div>
//   );
// };
