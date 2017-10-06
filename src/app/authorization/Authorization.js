import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';

import Navigation from '~/shared/Navigation';
import VariantButton from '~/shared/VariantButton';

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

        <VariantButton
          raised
          variant="blue"
          text="Sign up"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        />
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

      <VariantButton
        raised
        variant="blue"
        text="Log in"
        // onClick={async () => {
        //   await actions.setData({ });
        // }}
      />

      <div>
        <VariantButton
          raised
          variant="red"
          icon="google"
          text="Sign in with Google"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        />
      </div>

      <div>
        <VariantButton
          raised
          variant="indigo"
          icon="facebook-official"
          text="Sign in with Facebook"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        />
      </div>

      <div>
        <VariantButton
          raised
          variant="blue"
          icon="twitter"
          text="Sign in with Twitter"
          // onClick={async () => {
          //   await actions.setData({ });
          // }}
        />
      </div>
    </div>
  );
};

export default connect(
  ({ authorization }) => ({ authorization }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Authorization);
