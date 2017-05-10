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
      device: this.props.match.params.device
    }
  }

  componentDidMount () {
    console.log(this.props)
    fetch('/api/inventory/menu')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          loadingMenu: false,
          deviceMenu: json['deviceMenu'],
          device: this.props.match.params.device
        })
      })
  }

  render () {
    return (
      <div className='Graph'>
        <Header screenName={'Graph'} />
        <DeviceSideBar
          loadingMenu={this.state.loadingMenu}
          deviceMenu={this.state.deviceMenu}
          match={this.props.match}
        />
        <VitalsCharts
          device={this.state.device}
        />
      </div>
    )
  }
}

export default Graph
