import React, { Component } from 'react';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

export class RESTDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.deleteItem = this.deleteItem.bind(this);
  }

  handleOpen() {
    this.setState({
      modalOpen: open
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false
    });
  }

  deleteItem() {
    console.log(123);
    this.props.actions.onDeleteItem(this.props.id);
  }

  render() {
    return (
      <Modal
        trigger={ <Button onClick={ this.handleOpen }>Delete</Button> }
        open={ this.state.modalOpen }
        onClose={ this.handleClose }
        basic
        size='small'
      >
        <Header icon='delete' content='Delete' />
        <Modal.Content>
          <div>
            Are you sure you want to delete it?
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={ this.handleClose } inverted>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='green' onClick={ this.deleteItem } inverted>
            <Icon name='checkmark' /> Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
