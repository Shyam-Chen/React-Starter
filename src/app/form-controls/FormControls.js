import React from 'react';
import { connect } from 'react-redux';

import Navigation from '~/shared/Navigation';

import { JustRedux } from './JustRedux';
import { WithReduxForm } from './WithReduxForm';

const FormControls = () => (
  <div className="container">
    <Navigation />

    <JustRedux />
    <WithReduxForm />

    <style jsx>{`
      .container {
        padding: .5rem 1rem;
      }
    `}</style>
  </div>
);

export default connect()(FormControls);
