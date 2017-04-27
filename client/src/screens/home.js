import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import Header from '../components/header'

const style = {
  list: {
    color: 'blue',
    position: 'absolute',
    top: '30%',
    left: '40%'
  }
}

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <Header screenName={'Home'} />
        <ul style={style.list}>
          <li><Link to='/graph'>Graph</Link></li>
          <li><Link to='/table'>Table</Link></li>
        </ul>
      </div>
    )
  }
}

export default Radium(Home)
