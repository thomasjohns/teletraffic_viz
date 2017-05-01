import React, { Component } from 'react'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'
import Radium from 'radium'

const NavLink = Radium(ReactRouterNavLink)

const style = {
  base: {
    background: '#232323',
    width: '100%',
    height: '13%',
    position: 'absolute',
    margin: 0,
    padding: 0,
    top: '0%',
    left: '0%'
  },
  title: {
    fontFamily: 'monospace',
    color: '#EAE0C8',
    position: 'absolute',
    fontSize: '40px',
    left: '5%',
    top: '30%'
  },
  navLinks: {
    position: 'absolute',
    right: '25%',
    top: '30%'
  },
  linkText: {
    fontFamily: 'monospace',
    fontSize: '25px',
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#EAE0C8',
    textDecoration: 'none',
    ':hover': {
      color: '#00868B'
    },
    ':active': {
      backgroundColor: 'red'
    }
  }
}

class Header extends Component {
  render () {
    return (
      <h1 className='Header' style={style.base}>
        <div style={style.title}>
          Data Viewer <i>{this.props.screenName}</i>
        </div>
        <div style={style.navLinks}>

          <NavLink
            activeStyle={style.linkText}
            activeClassName='active'
            to='/'
          >Home</NavLink>

          <NavLink
            activeStyle={style.linkText}
            activeClassName='active'
            to='/graph'
          >Graph</NavLink>

          <NavLink
            activeStyle={style.linkText}
            activeClassName='active'
            to='/table'
          >Table</NavLink>

          <NavLink
            activeStyle={style.linkText}
            activeClassName='active'
            to='/excel'
          >Excel</NavLink>

          <NavLink
            activeStyle={style.linkText}
            activeClassName='active'
            to='/upload'
          >Upload</NavLink>

          <NavLink
            activeStyle={style.linkText}
            activeClassName='active'
            to='/download'
          >Download</NavLink>
        </div>
      </h1>
    )
  }
}

export default Radium(Header)
