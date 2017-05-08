import React, { Component } from 'react'
import Header from '../components/header'
import DeviceSideBar from '../components/device_side_bar'
import VitalsCharts from '../components/vitals_charts'

class Graph extends Component {
  render () {
    return (
      <div className='Graph'>
        <Header screenName={'Graph'} />
        <DeviceSideBar />
        <VitalsCharts />
      </div>
    )
  }
}

export default Graph
