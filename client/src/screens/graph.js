import React, { Component } from 'react'
import Header from '../components/header'
import DeviceSideBar from '../components/device_side_bar'

class Graph extends Component {
  render () {
    return (
      <div className='Graph'>
        <Header screenName={'Graph'} />
        <DeviceSideBar />
      </div>
    )
  }
}

export default Graph
