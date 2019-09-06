import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createBrowserHistory } from 'history';

import { configureStore } from '~/core/store';
import i18n from '~/core/i18n';

import App from './App';

const history = createBrowserHistory();
const store = configureStore(history);
const language = navigator.language.split(/[-_]/)[0];

render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={i18n[language]}>
      <App history={history} />
    </IntlProvider>
  </Provider>,
  document.querySelector('#app'),
);

if (module.hot) {
  module.hot.accept();
}
