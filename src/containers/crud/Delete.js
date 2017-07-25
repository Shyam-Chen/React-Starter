import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

import * as actions from '../../actions/crud';

const Delete = ({ crud, actions }) => {
  const onModalClose = () => actions.onDeleteModal(false);

  const onConfirm = () => {
    actions.onDeleteItem(crud.deleteData);
    onModalClose();
  };

  return (
    <Modal open={ crud.modalOpen } onClose={ onModalClose } basic size="small">
      <Header icon="delete" content="Delete" />
      <Modal.Content>
        <div>
          Are you sure you want to delete it?
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" onClick={ onModalClose } inverted>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={ onConfirm } inverted>
          <Icon name="checkmark" /> Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default connect(
  ({ crud }) => ({ crud }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Delete);
