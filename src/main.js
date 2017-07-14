import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux';

import App from './components/App';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getList() {
    xhr.get('https://web-go-demo.herokuapp.com/__/list')
      .then(res => {
        this.setState({
          list: res.text
        });
      });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

App.propTypes = {};

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#app')
);
