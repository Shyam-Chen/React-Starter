import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { history } from '~/core/Router';
import { configureStore } from '~/core/store';
import i18n from '~/core/i18n';
import { theme } from '~/core/material';

import nestPairs from '~/shared/nest-pairs';

import App from '~/App';

const store = configureStore();
const language = navigator.language.split(/[-_]/)[0];

const Providers = nestPairs(
  [Provider, { store }],
  [ConnectedRouter, { history }],
  [IntlProvider, { locale: language, messages: i18n[language] }],
  [MuiThemeProvider, { theme }],
);

render(
  <Providers>
    <CssBaseline />
    {/* TODO: prefix lang */}
    {/* <Routes /> */}
    <App />
  </Providers>,
  document.querySelector('#app'),
);
