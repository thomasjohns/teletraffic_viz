import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <h1 className='Header'>
        Reporting {this.props.screenName}
        <Link to='/'>Home</Link>
        <Link to='/graph'>Graph</Link>
        <Link to='/table'>Table</Link>
      </h1>
    )
  }
}

export default Header
