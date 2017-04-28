import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const style = {
  base: {
    background: '#121F1F',
    width: '100%',
    height: '12%',
    position: 'absolute',
    marginTop: '0%',
    top: '0%',
    left: '0%'
  },
  title: {
    fontFamily: 'Arimo',
    color: 'green',
    left: '10%',
    position: 'absolue'
  },
  navLinks: {
    fontFamily: 'Arimo',
    color: 'red'
  }
}

class Header extends Component {
  render () {
    return (
      <h1 className='Header' style={style.base}>
        <div style={style.title}>Reporting {this.props.screenName}</div>
        <div style={style.navLinks}>
          <Link to='/'>Home</Link>
          <Link to='/graph'>Graph</Link>
          <Link to='/table'>Table</Link>
        </div>
      </h1>
    )
  }
}

export default Radium(Header)
