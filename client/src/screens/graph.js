import React, { Component } from 'react'
import Header from '../components/header'
import DeviceSideBar from '../components/device_side_bar'
import VitalsCharts from '../components/vitals_charts'

class Graph extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loadingMenu: true,
      deviceMenu: null,
      device: null
    }
    this.handleDeviceChange = this.handleDeviceChange.bind(this)
  }

  componentDidMount () {
    fetch('/api/inventory/menu')
      .then((response) => {
        return response.json()
      }).then((jsonResponse) => {
        this.setState({
          loadingMenu: false,
          deviceMenu: jsonResponse['deviceMenu']
        })
      })
  }

  handleDeviceChange (device) {
    this.setState({device})
  }

  render () {
    return (
      <div className='Graph'>
        <Header screenName={'Graph'} />
        <DeviceSideBar
          handleDeviceChange={this.handleDeviceChange}
          loadingMenu={this.state.loadingMenu}
          deviceMenu={this.state.deviceMenu}
          url={this.props.match.url}
        />
        <VitalsCharts
          device={this.state.device}
        />
      </div>
    )
  }
}

export default Graph
