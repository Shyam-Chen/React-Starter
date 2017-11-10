import React from 'react';
import { connect } from 'react-redux';

import Navigation from '~/shared/Navigation';

import { JustRedux } from './just-redux';
import { WithReduxForm } from './with-redux-form';
import { ReactiveForms } from './reactive-forms';

const FormControls = () => (
  <div className="container">
    <Navigation />

    <JustRedux />
    <WithReduxForm />
    <ReactiveForms />

    <style jsx>{`
      .container {
        padding: .5rem 1rem;
      }
    `}</style>
  </div>
);

export default connect()(FormControls);
