import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/home'
import Graph from './screens/graph'
import Table from './screens/table'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/graph' component={Graph} />
      <Route path='/table' component={Table} />
    </div>
  </Router>,
  document.getElementById('root')
)
