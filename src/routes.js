import React from 'react'
import { Route } from 'react-router'

import Home from './components/Home'
import About from './components/About'

const routes = (
  <div>
    <Route exact path='/' component={ Home } />
    <Route path="/about" component={ About } />
  </div>
)

export default routes
