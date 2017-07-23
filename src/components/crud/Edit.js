import React, { Component } from 'react';

import { Button, Modal, Header, Icon, Input } from 'semantic-ui-react';

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,

      primary: props.primary,
      accent: props.accent,
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
    const { primary, accent } = this.state;

    if (primary && accent) {
      this.props.actions.onEditItem(this.props.id, primary, accent);
      this.handleClose();
    }
  }

  render() {
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
            <Input value={ this.state.primary } onChange={ event => this.setState({ primary: event.target.value }) } />
            { ' - ' }
            <Input value={ this.state.accent } onChange={ event => this.setState({ accent: event.target.value }) } />
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
