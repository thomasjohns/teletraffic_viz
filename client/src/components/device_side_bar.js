import React, { Component } from 'react'
import Radium from 'radium'
// import ReactMenuAim from 'react-menu-aim'
import { Link as ReactRouterLink } from 'react-router-dom'

const Link = Radium(ReactRouterLink)

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

  populateMenu () {
    if (this.props.loadingMenu) {
      return 'Loading menu ...'
    } else {
      // return this.props.deviceMenu[0]['name']
      // return (
      //   <ul>
      //     <li>{this.props.deviceMenu[0]['subMenu'][0]}</li>
      //     <li>{this.props.deviceMenu[0]['subMenu'][1]}</li>
      //   </ul>
      // )
      console.log(this.props)
      const listItems = this.props.deviceMenu[0]['subMenu'].map((device) =>
        <li key={device}><Link to={`${this.props.match.url}/${device}`}>{device}</Link></li>
        // <li><Link to={`${this.props.location.pathname}/${device}`}>{device}</Link></li>
      )
      return (
        <ul>{listItems}</ul>
      )
    }
  }

  render () {
    return (
      <div style={style.base}>
        {this.populateMenu()}
      </div>
    )
  }
}

export default Radium(DeviceSideBar)
