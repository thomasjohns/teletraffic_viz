import React, { Component } from 'react'
import Radium from 'radium'
// import ReactMenuAim from 'react-menu-aim'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'

const NavLink = Radium(ReactRouterNavLink)

const style = {
  base: {
    background: '#DBDBDB',
    width: '20%',
    height: '87%',
    position: 'absolute',
    margin: 0,
    padding: 0,
    top: '13%',
    left: '0%'
  }
}

class DeviceSideBar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      device: null
    }
  }
  writeMenu () {
    if (this.props.loadingMenu) {
      return 'Loading menu ...'
    } else {
      const listItems = this.props.deviceMenu[0]['subMenu'].map((device) =>
        <li key={device}>
          <NavLink
            to={`${this.props.url}/${device}`}
            onClick={() => this.props.handleDeviceChange(device)}
          >
            {device}
          </NavLink>
        </li>
      )
      return (
        <ul>{listItems}</ul>
      )
    }
  }

  render () {
    return (
      <div style={style.base}>
        {this.writeMenu()}
      </div>
    )
  }
}

export default Radium(DeviceSideBar)
