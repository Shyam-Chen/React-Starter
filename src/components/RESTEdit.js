import React, { Component } from 'react';

import { Button, Modal, Header, Icon, Input } from 'semantic-ui-react';

export class RESTEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,

      foo: props.foo,
      bar: props.bar,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.editItem = this.editItem.bind(this);
  }

  handleOpen() {
    this.setState({
      modalOpen: true
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false
    });
  }

  editItem() {
    const { foo, bar } = this.state;

    if (foo && bar) {
      this.props.actions.onEditItem(this.props.id, foo, bar);
      this.handleClose();
    }
  }

  render() {
    // const { foo, bar, value, valueActions } = this.props;

    return (
      <Modal
        trigger={ <Button basic color="blue" onClick={ this.handleOpen }>Edit</Button> }
        open={ this.state.modalOpen }
        onClose={ this.handleClose }
        basic
        size="small"
      >
        <Header icon="edit" content="Edit" />
        <Modal.Content>
          <div>
            <Input value={ this.state.foo } onChange={ event => this.setState({ foo: event.target.value }) } />
            { ' - ' }
            <Input value={ this.state.bar } onChange={ event => this.setState({ bar: event.target.value }) } />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" onClick={ this.handleClose } inverted>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" onClick={ this.editItem } inverted>
            <Icon name="checkmark" /> Save
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
