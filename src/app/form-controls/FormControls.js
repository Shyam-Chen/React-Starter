import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Link from '~/shared/Link';
import Button from '~/shared/Button';

import { TemplateDriven } from './template-driven';
import { Reactive } from './reactive';

const FormControls = ({ match, routerActions }) => {
  return (
    <div className="container">
      <Link to={`${match.url}/template-driven`} href={`${match.url}/template-driven`}>
        <Button
          raised
          color="teal"

        >
          Template-driven
        </Button>
      </Link>
      {'　'}
      <Link to={`${match.url}/reactive`} href={`${match.url}/reactive`}>
        <Button
          raised
          color="teal"

        >
          Reactive
        </Button>
      </Link>

      <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/template-driven`} />}/>
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

export default connect()(FormControls);
