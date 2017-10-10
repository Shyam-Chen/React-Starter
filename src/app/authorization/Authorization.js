import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';

import Navigation from '~/shared/Navigation';
import Button from '~/shared/Button';

import * as actions from './actions';

const Authorization = () => {

  return (
    <div>
      <Navigation />

      <div>TODO: Authorization Page</div>

      <div>
        <TextField
          label="Email"
          margin="normal"
          // value={value}
          // onChange={event => actions.setData({ })}
        />

        <TextField
          label="Password"
          margin="normal"
          // value={value}
          // onChange={event => actions.setData({ })}
        />

        <Button
          raised
          color="blue"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        >
          Sign up
        </Button>
      </div>

      <TextField
        label="Email"
        margin="normal"
        // value={value}
        // onChange={event => actions.setData({ })}
      />

      <TextField
        label="Password"
        margin="normal"
        // value={value}
        // onChange={event => actions.setData({ })}
      />

      <Button
        raised
        color="blue"
        // onClick={async () => {
        //   await actions.setData({ });
        // }}
      >
        Log in
      </Button>

      <div>
        <Button
          raised
          color="red"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        >
          <i className="fa fa-google" aria-hidden="true" style={{ marginRight: '1rem' }}></i>
          Sign in with Google
        </Button>
      </div>

      <div>
        <Button
          raised
          color="indigo"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        >
          <i className="fa fa-facebook-official" aria-hidden="true" style={{ marginRight: '1rem' }}></i>
          Sign in with Facebook
        </Button>
      </div>

      <div>
        <Button
          raised
          color="blue"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        >
          <i className="fa fa-twitter" aria-hidden="true" style={{ marginRight: '1rem' }}></i>
          Sign in with Twitter
        </Button>
      </div>
    </div>
  );
};

export default connect(
  ({ authorization }) => ({ authorization }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Authorization);
