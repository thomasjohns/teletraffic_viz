import React, { Component } from 'react'
import Radium from 'radium'
import { VictoryArea, VictoryChart } from 'victory'
import Loader from 'halogen/PulseLoader'

const style = {
  base: {
    width: '80%',
    height: '87%',
    position: 'absolute',
    margin: 0,
    padding: 0,
    top: '13%',
    left: '20%'
  },
  deviceTitle: {
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'center'
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

  componentWillReceiveProps (nextProps) {
    this.setState({dataLoaded: false})
    fetch(`/api/timeseries/${nextProps.device}`)
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
    const chartWidth = 500
    const chartHeight = 240
    return (
      <svg
        width={1040}
        height={500}
      >
        <g>
          <VictoryChart
            domain={{y: [0, 100]}}
          >
            <VictoryArea
              data={this.state.timeseries}
              x={'dt'}
              y={'cpu'}
              width={chartWidth}
              height={chartHeight}
            />
          </VictoryChart>
        </g>

        <g transform={`translate(${chartWidth + 20}, 0)`}>
          <VictoryChart
            domain={{y: [0, 100]}}
          >
            <VictoryArea
              style={{
                data: {fill: "tomato", opacity: 0.7}
              }}
              data={this.state.timeseries}
              x={'dt'}
              y={'memory'}
              width={chartWidth}
              height={chartHeight}
            />
          </VictoryChart>
        </g>

        <g transform={`translate(0, ${chartHeight + 20})`}>
          <VictoryChart
            domain={{y: [0, 100]}}
          >
            <VictoryArea
              data={this.state.timeseries}
              x={'dt'}
              y={'disk'}
              width={chartWidth}
              height={chartHeight}
            />
          </VictoryChart>
        </g>

        <g transform={`translate(${chartWidth + 20}, ${chartHeight + 20})`}>
          <VictoryChart
            domain={{y: [0, 1]}}
          >
            <VictoryArea
              data={this.state.timeseries}
              x={'dt'}
              y={'uptime'}
              width={chartWidth}
              height={chartHeight}
            />
          </VictoryChart>
        </g>
      </svg>
    )
  }

  handlePlotArea () {
    if (this.state.dataLoaded === false) {
      if (!this.props.device) {
        return (
          <h1 style={style.deviceTitle}>
            No device selected.
          </h1>
        )
      } else {
        return (
          <div style={style.deviceTitle}>
            <Loader color='#26A65B' size='40px' margin='40px' />
          </div>
        )
      }
    } else {
      return this.createCharts()
    }
  }

  render () {
    return (
      <div style={style.base}>
        <h1 style={style.deviceTitle}>{this.props.device}</h1>
        <div>{this.handlePlotArea()}</div>
      </div>
    )
  }
}

export default Radium(VitalsCharts)
