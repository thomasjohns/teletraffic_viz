import React, { Component } from 'react'
import Radium from 'radium'
import ReactMenuAim from 'react-menu-aim'

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
  render () {
    return (
      <div style={style.base}>stuff</div>
    )
  }
}

export default Radium(DeviceSideBar)
