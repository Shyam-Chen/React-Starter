import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { routerActions } from 'react-router-redux';

import Navigation from '~/shared/Navigation';
import Link from '~/shared/Link';
import Button from '~/shared/Button';

import { TemplateDriven } from './template-driven';
import { Reactive } from './reactive';

const FormControls = ({ match, routerActions }) => {
  return (
    <div className="container">
      <Navigation />

      <Link to={`${match.url}/template-driven`} href={`${match.url}/template-driven`}>
        <Button
          raised
          color="teal"
          onClick={() => routerActions.push(`${match.url}/template-driven`)}
        >
          Template-driven
        </Button>
      </Link>
      {'　'}
      <Link to={`${match.url}/reactive`} href={`${match.url}/reactive`}>
        <Button
          raised
          color="teal"
          onClick={() => routerActions.push(`${match.url}/reactive`)}
        >
          Reactive
        </Button>
      </Link>

      <Route path={`${match.url}/template-driven`} component={TemplateDriven} />
      <Route path={`${match.url}/reactive`} component={Reactive} />

      <style jsx>{`
        .container {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    routerActions: bindActionCreators(routerActions, dispatch),
  }),
)(FormControls);
