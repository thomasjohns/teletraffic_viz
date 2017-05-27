import React, { Component } from 'react'
import Radium from 'radium'
import { VictoryArea, VictoryChart } from 'victory'

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

  componentWillReceiveProps (nextProps) {
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
    return (
      <svg
        width={750}
        height={500}
      >
        <g>
          <VictoryChart
            padding={{top: 0, bottom: 10, left: 10, right: 10}}
          >
            <VictoryArea
              data={this.state.timeseries}
              x={'dt'}
              y={'cpu'}
              width={350}
              height={240}
            />
          </VictoryChart>
        </g>

        <g transform={'translate(350, 0)'}>
          <VictoryChart
            padding={{top: 0, bottom: 10, left: 10, right: 10}}
          >
            <VictoryArea
              data={this.state.timeseries}
              x={'dt'}
              y={'memory'}
              width={350}
              height={240}
            />
          </VictoryChart>
        </g>

        <g transform={'translate(0, 250)'}>
          <VictoryChart
            padding={{top: 0, bottom: 10, left: 10, right: 10}}
          >
            <VictoryArea
              data={this.state.timeseries}
              x={'dt'}
              y={'disk'}
              width={350}
              height={240}
            />
          </VictoryChart>
        </g>

        <g transform={'translate(350, 250)'}>
          <VictoryChart
            padding={{top: 0, bottom: 10, left: 10, right: 10}}
          >
            <VictoryArea
              data={this.state.timeseries}
              x={'dt'}
              y={'uptime'}
              width={350}
              height={240}
            />
          </VictoryChart>
        </g>
      </svg>
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
