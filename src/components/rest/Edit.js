import React, { Component } from 'react';

import { Button, Modal, Header, Icon, Input } from 'semantic-ui-react';

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,

      text: props.text
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
    const { text } = this.state;

    if (text) {
      this.props.actions.onSave(this.props.id, text);
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
            <Input value={ this.state.text } onChange={ event => this.setState({ text: event.target.value }) } />
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
