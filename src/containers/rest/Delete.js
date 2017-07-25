import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

import * as actions from '../../actions/rest';

const Delete = ({ rest, actions }) => {
  const onModalClose = () => actions.onDeleteModal(false);

  const onConfirm = () => {
    actions.onRemove(rest.deleteData);
    onModalClose();
  };

  return (
    <Modal open={ rest.deleteModalOpen } onClose={ onModalClose } basic size="small">
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
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Delete);
