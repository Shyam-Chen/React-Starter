import React, { Component } from 'react';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

export class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <Modal
        trigger={ <Button basic color="red" onClick={ this.handleOpen }>Delete</Button> }
        open={ this.state.modalOpen }
        onClose={ this.handleClose }
        basic
        size="small"
      >
        <Header icon="delete" content="Delete" />
        <Modal.Content>
          <div>
            Are you sure you want to delete it?
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" onClick={ this.handleClose } inverted>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" onClick={ this.props.onDelete } inverted>
            <Icon name="checkmark" /> Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
