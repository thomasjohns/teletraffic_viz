import React, { Component } from 'react'
import Radium from 'radium'
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory'

const style = {
  base: {
    width: '80%',
    height: '87%',
    position: 'absolute',
    margin: 0,
    padding: 0,
    top: '13%',
    left: '20%'
  }
}

class VitalsCharts extends Component {

  constructor (props) {
    super(props)
    this.state = {
      timeseries: [],
      dataLoaded: false
    }
  }

  componentDidMount () {
    fetch(`/api/timeseries/${this.props.device}`)
      .then(response => {
        return response.json()
      }).then(json => {
        this.setState({
          timeseries: json,
          dataLoaded: true
        })
      })
  }

  createCharts () {
    return (
      <div>
        <VictoryChart
          width={100}
          height={100}
        >

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'cpu'}
            style={{
              width=20
              hight=20
            }}
          />

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'memory'}
          />

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'disk'}
          />

          <VictoryArea
            data={this.state.timeseries}
            x={'dt'}
            y={'uptime'}
          />

        </VictoryChart>
      </div>
    )
  }

  handlePlotArea () {
    if (this.state.dataLoaded === false) {
      if (!this.props.device) {
        return 'No device selected'
      } else {
        return 'Loading data ...'
      }
    } else {
      return this.createCharts()
    }
  }

  render () {
    return (
      <div style={style.base}>
        <h1>{this.props.device}</h1>
        <div>{this.handlePlotArea()}</div>
      </div>
    )
  }
}

export default Radium(VitalsCharts)
