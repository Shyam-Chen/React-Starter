import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import classnames from 'classnames';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';
import * as selectors from './selectors';

const App = ({ app, actions, selectors }) => {
  const onSuggestionsFetchRequested = ({ value }) =>
    actions.searchItemObservable(value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const onSuggestionsClearRequested = () =>
    actions.setData({ suggestions: [] });

  const getSuggestionValue = suggestion =>
    suggestion.text;

  const renderSuggestion = (suggestion, { query }) => {
    const value = getSuggestionValue(suggestion);

    const matches = AutosuggestHighlightMatch(value, query);
    const parts = AutosuggestHighlightParse(value, matches);

    return (
      <span>
        {
          parts.map(({ highlight, text }, index) => {
            const optionClasses = classnames({ 'react-autosuggest__suggestion-match': highlight });

            return (
              <span className={optionClasses} key={index}>{text}</span>
            );
          })
        }
      </span>
    );
  };

  return (
    <div>
      <div className="container">
        <Navigation />

        <div className={classnames({ error: app.touched && selectors.error })}>
          <Autosuggest
            suggestions={app.suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: 'Type here',
              value: app.value,
              onChange(event, { newValue }) {
                actions.setData({ value: newValue });
              },
              onBlur() {
                actions.setData({ touched: true })
              }
            }}
          />

          {
            app.touched && selectors.error &&
            <div className="error-message">This is a required field.</div>
          }
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .error-message {
          color: #F44336;
        }
      `}</style>
    </div>
  );
};

const bindSelectCreators = (selectors, state) => {
  const obj = {};
  const keys = Object.keys(selectors);

  for (let i = 0, l = keys.length; i < l; i++) {
    obj[keys[i]] = selectors[keys[i]](state);
  }

  return obj;
};

export default connect(
  ({ app }) => ({ app, selectors: bindSelectCreators(selectors, app) }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(App);
