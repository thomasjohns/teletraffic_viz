import React, { Component } from 'react'
import Radium from 'radium'
import ReactMenuAim from 'react-menu-aim'

const style = {
  base: {
    background: '#A8A8A8',
    width: '20%',
    height: '90%',
    position: 'absolute',
    marginTop: '0%',
    top: '10%',
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
