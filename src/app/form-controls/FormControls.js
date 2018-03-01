import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { routerActions } from 'react-router-redux';

import Navigation from '~/shared/Navigation';
import Link from '~/shared/Link';
import Button from '~/shared/Button';

import * as actions from './actions';
import { JustRedux } from './just-redux';
import { WithReduxForm } from './with-redux-form';
import { ReactiveForms } from './reactive-forms';

const FormControls = ({ match, routerActions }) => {

  return (
    <div className="container">
      <Navigation />

      <Link to={`${match.url}/just-redux`}>
        <Button raised color="teal" onClick={() => routerActions.push(`${match.url}/just-redux`)}>
          Just Redux
        </Button>
      </Link>
      {'　'}
      <Link to={`${match.url}/with-redux-form`}>
        <Button raised color="teal" onClick={() => routerActions.push(`${match.url}/with-redux-form`)}>
          With Redux Form
        </Button>
      </Link>
      {'　'}
      <Link to={`${match.url}/reactive-forms`} onClick={() => routerActions.push(`${match.url}/reactive-forms`)}>
        <Button raised color="teal">Reactive Forms</Button>
      </Link>

      <Route path={`${match.url}/just-redux`} component={JustRedux} />
      <Route path={`${match.url}/with-redux-form`} component={WithReduxForm} />
      <Route path={`${match.url}/reactive-forms`} component={ReactiveForms} />

      <style jsx>{`
        .container {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ formControls }) => ({ formControls }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  }),
)(FormControls);
