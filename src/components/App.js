import React from 'react';

import About from './About';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />

    <About value="123" />
  </div>
);

export default App;
