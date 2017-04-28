import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const style = {
  base: {
    background: '#DBDBDB',
    width: '100%',
    height: '10%',
    position: 'absolute',
    marginTop: '0%',
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
    right: '15%',
    top: '30%'
  },
  linkText: {
    fontFamily: 'monospace',
    fontSize: '25px',
    paddingRight: '10%',
    color: '#EAE0C8',
    ':hover': {
      color: '#00868B'
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
          <Link style={style.linkText} to='/'>Home</Link>
          <Link style={style.linkText} to='/graph'>Graph</Link>
          <Link style={style.linkText} to='/table'>Table</Link>
          <Link style={style.linkText} to='/excel'>Excel</Link>
          <Link style={style.linkText} to='/upload'>Upload</Link>
          <Link style={style.linkText} to='/download'>Download</Link>
        </div>
      </h1>
    )
  }
}

export default Radium(Header)
