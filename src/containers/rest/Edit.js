import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal, Header, Icon, Input } from 'semantic-ui-react';

import * as actions from '../../actions/rest';

const Edit = ({ rest, actions }) => {
  const { id, text } = rest.editData;

  const onModalClose = () => actions.onEditModal(false);

  const onEdit = () => {
    if (text) {
      actions.onSave(id, text);
      onModalClose();
    }
  };

  return (
    <Modal open={ rest.editModalOpen } onClose={ onModalClose } basic size="small">
      <Header icon="edit" content="Edit" />
      <Modal.Content>
        <div>
          <Input value={ text } onChange={ event => actions.onSetEdit(id, event.target.value) } />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" onClick={ onModalClose } inverted>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={ onEdit } inverted>
          <Icon name="checkmark" /> Save
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Edit);
