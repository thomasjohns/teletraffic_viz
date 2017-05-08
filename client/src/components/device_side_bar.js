import React, { Component } from 'react'
import Radium from 'radium'
// import ReactMenuAim from 'react-menu-aim'

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
      loadingMenu: true,
      deviceMenu: null
    }
  }

  componentDidMount () {
    fetch('/api/inventory/menu')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          loadingMenu: false,
          deviceMenu: json['deviceMenu']
        })
      })
  }

  writeMenu () {
    if (this.state.loadingMenu) {
      return 'Loading Menu'
    } else {
      return this.state.deviceMenu[0]['name']
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
