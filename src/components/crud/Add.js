import React from 'react';

import { Button, Input } from 'semantic-ui-react';

export const Add = ({ actions }) => {
  let primary, accent;

  const onAdd = event => {
    event.preventDefault();

    if (primary.inputRef.value && accent.inputRef.value) {
      actions.onAddItem(primary.inputRef.value, accent.inputRef.value);
      primary.inputRef.value = '';
      accent.inputRef.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={ onAdd }>
        <Input ref={ node => primary = node } />
        { ' - ' }
        <Input ref={ node => accent = node } />
        { ' ' }
        <Button basic color="black" type="submit">Add</Button>
      </form>
    </div>
  );
}

// import React, { Component } from 'react';
//
// import { Button, Input } from 'semantic-ui-react';
//
// export class Add extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       primary: '',
//       accent: ''
//     };
//
//     this.onAdd = this.onAdd.bind(this);
//   }
//
//   onAdd() {
//     const { primary, accent } = this.state;
//
//     if (primary && accent) {
//       this.props.actions.onAddItem(primary, accent);
//       this.setState({ primary: '', accent: '' });
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <Input value={ this.state.primary } onChange={ event => this.setState({ primary: event.target.value }) } />
//         { ' - ' }
//         <Input value={ this.state.accent } onChange={ event => this.setState({ accent: event.target.value }) } />
//         { ' ' }
//         <Button basic color="black" onClick={ this.onAdd }>Add</Button>
//       </div>
//     );
//   }
// }
