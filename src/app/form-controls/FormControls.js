import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navigation from '~/shared/Navigation';
// import Link from '~/shared/Link';
import Button from '~/shared/Button';

import * as actions from './actions';
import { JustRedux } from './just-redux';
import { WithReduxForm } from './with-redux-form';
import { ReactiveForms } from './reactive-forms';

const FormControls = ({ formControls: { justRedux, withReduxForm, reactiveForms }, actions }) => (
  <div className="container">
    <Navigation />

    {/* <Link to="/form-controls/just-redux">
      <Button raised color="teal">Just Redux</Button>
    </Link> */}

    {/* <Link to="/form-controls/with-redux-form">
      <Button raised color="teal">With Redux Form</Button>
    </Link> */}

    {/* <Link to="/form-controls/reactive-forms">
      <Button raised color="teal">Reactive Forms</Button>
    </Link> */}

    <Button raised color="teal" onClick={() => actions.setData({ justRedux: true, withReduxForm: false, reactiveForms: false })}>Just Redux</Button> {'　'}
    <Button raised color="teal" onClick={() => actions.setData({ justRedux: false, withReduxForm: true, reactiveForms: false })}>With Redux Form</Button> {'　'}
    <Button raised color="teal" onClick={() => actions.setData({ justRedux: false, withReduxForm: false, reactiveForms: true })}>Reactive Forms</Button>

    {justRedux && <JustRedux />}
    {withReduxForm && <WithReduxForm />}
    {reactiveForms && <ReactiveForms />}

    <style jsx>{`
      .container {
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default connect(
  ({ formControls }) => ({ formControls }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(FormControls);
