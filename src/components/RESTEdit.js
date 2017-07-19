import React, { Component } from 'react';

import { Button, Modal, Header, Icon, Input } from 'semantic-ui-react';

export class RESTEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  render() {
    return (
      <Modal
        trigger={ <Button onClick={ this.handleOpen }>Edit</Button> }
        open={ this.state.modalOpen }
        onClose={ this.handleClose }
        basic
        size='small'
      >
        <Header icon='edit' content='Edit' />
        <Modal.Content>
          <div>
            <Input />
            { ' - ' }
            <Input />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={ this.handleClose } inverted>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Save
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
