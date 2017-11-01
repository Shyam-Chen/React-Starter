import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';

import Button from '~/shared/Button';

import * as actions from '../actions';

const Add = ({ rest: { addData }, actions }) => {
  const { text } = addData;

  return (
    <div className="container">
      <TextField
        value={text}
        onChange={event =>
          actions.setData({
            addData: { ...addData, text: event.target.value }
          })
        }
      />
      {' '}
      <Button
        raised
        color="blue"
        onClick={async () => {
          if (text) {
            await actions.setData({ loading: true });
            await actions.addItem(text);
            await actions.setData({ addData: { text: '' } });
          }
        }}
      >
        Add (Thunk)
      </Button>
      {' '}
      <Button
        raised
        color="teal"
        onClick={async () => {
          if (text) {
            await actions.setData({ loading: true });
            await actions.addItemSaga(text);
            await actions.setData({ addData: { text: '' } });
          }
        }}
      >
        Add (Saga)
      </Button>
      {' '}
      <Button
        raised
        color="purple"
        onClick={async () => {
          if (text) {
            await actions.setData({ loading: true });
            await actions.addItemObservable(text);
            await actions.setData({ addData: { text: '' } });
          }
        }}
      >
        Add (Observable)
      </Button>

      <style jsx>{`
        .container {
          padding: .5rem 0;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Add);
