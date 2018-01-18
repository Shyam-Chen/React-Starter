import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';

import Button from '~/shared/Button';

import * as actions from '../actions';

const Add = ({ graphql: { addData }, actions }) => {
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
        Add
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
  ({ graphql }) => ({ graphql }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Add);
