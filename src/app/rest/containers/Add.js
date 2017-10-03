import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';

import VariantButton from '~/shared/VariantButton';

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
      { ' ' }
      <VariantButton
        raised
        variant="blue"
        text="Add"
        onClick={async () => {
          if (text) {
            await actions.setData({ loading: true });
            await actions.addItem(text);
            await actions.setData({ addData: { text: '' } });
          }
        }}
      />

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
