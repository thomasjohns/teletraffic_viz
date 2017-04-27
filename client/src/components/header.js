import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const style = {
  base: {
    color: 'white',
    background: '#121F1F',
    width: '100%',
    height: '12%',
    position: 'absolute',
    top: '0%',
    left: '0%'
  }
}

class Header extends Component {
  render () {
    return (
      <h1 className='Header' style={style.base}>
        <div>Reporting {this.props.screenName}</div>
        <Link to='/'>Home</Link>
        <Link to='/graph'>Graph</Link>
        <Link to='/table'>Table</Link>
      </h1>
    )
  }
}

export default Radium(Header)
