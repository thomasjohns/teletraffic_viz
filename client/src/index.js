import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/home'
import Graph from './screens/graph'
import Table from './screens/table'
import Excel from './screens/excel'
import Upload from './screens/upload'
import Download from './screens/download'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/graph/' component={Graph} />
          <Route path='/table' component={Table} />
          <Route path='/excel' component={Excel} />
          <Route path='/upload' component={Upload} />
          <Route path='/download' component={Download} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
